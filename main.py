from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from email.message import EmailMessage
import os
import re
import smtplib
import ssl
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json
from datetime import datetime
import pytz
from urllib.parse import urlsplit

load_dotenv()

# Simple static folder config
app = Flask(__name__, static_folder='static', static_url_path='/static')

# CORS configuration
CORS(app, resources={
    r"/api/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Google Sheets setup
scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

# Use environment variable for credentials in production, file for local dev
if os.path.exists('credentials.json'):
    creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
else:
    creds_dict = json.loads(os.getenv('GOOGLE_CREDENTIALS_JSON'))
    creds = ServiceAccountCredentials.from_json_keyfile_dict(creds_dict, scope)

client = gspread.authorize(creds)

sheet_name = os.getenv('SHEET_NAME', 'IT_Help_Desk_Log')
sheet = client.open(sheet_name).sheet1

TICKET_CATEGORIES = {'Password', 'Software', 'Hardware', 'Email', 'Network', 'Other'}


def send_ticket_email(ticket):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_username = os.getenv('SMTP_USERNAME')
    smtp_password = os.getenv('SMTP_PASSWORD')
    recipient = os.getenv('IT_TICKET_EMAIL')
    if not all((smtp_host, smtp_username, smtp_password, recipient)):
        raise RuntimeError('Ticket email is not configured.')

    try:
        smtp_port = int(os.getenv('SMTP_PORT', '587'))
    except ValueError as error:
        raise RuntimeError('SMTP_PORT must be a number.') from error

    message = EmailMessage()
    message['Subject'] = f"askRenewal ticket: {ticket['category']}"
    message['From'] = os.getenv('SMTP_FROM') or smtp_username
    message['To'] = recipient
    message['Reply-To'] = ticket['email']
    message.set_content(
        f"""A new askRenewal support ticket was submitted.

Name: {ticket['name']}
Email: {ticket['email']}
Category: {ticket['category']}

Issue details:
{ticket['details']}
"""
    )

    use_ssl = os.getenv('SMTP_USE_SSL', 'false').lower() == 'true'
    context = ssl.create_default_context()
    if use_ssl:
        smtp_connection = smtplib.SMTP_SSL(
            smtp_host, smtp_port, timeout=20, context=context
        )
    else:
        smtp_connection = smtplib.SMTP(smtp_host, smtp_port, timeout=20)

    with smtp_connection as server:
        if not use_ssl:
            server.starttls(context=context)
        server.login(smtp_username, smtp_password)
        server.send_message(message)


def valid_ticket_email(value):
    return bool(re.fullmatch(r'[^@\s]+@[^@\s]+\.[^@\s]+', value))

@app.route('/api/submit', methods=['POST', 'OPTIONS'])
def submit():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        print("Request received!")
        data = request.json
        name = data.get('name')
        primaryIssue = data.get('primaryIssue')
        subIssue = data.get('subIssue', '')  # Default to empty string if not provided
        
        # Use Eastern Time
        eastern = pytz.timezone('America/New_York')
        timestamp = datetime.now(eastern).strftime("%Y-%m-%d %I:%M:%S %p")
        
        print(f"Name: {name}, Primary Issue: {primaryIssue}, Sub-Issue: {subIssue}, Time: {timestamp}")
        
        # Append to Google Sheet with 4 columns
        sheet.append_row([timestamp, name, primaryIssue, subIssue])
        
        print("Data added to sheet!")
        
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route('/api/tickets', methods=['POST'])
def submit_ticket():
    origin = request.headers.get('Origin')
    if origin:
        parsed_origin = urlsplit(origin)
        if parsed_origin.scheme not in {'http', 'https'} or parsed_origin.netloc.lower() != request.host.lower():
            return jsonify({'status': 'error', 'message': 'Ticket submissions must come from this site.'}), 403

    if request.content_length and request.content_length > 16 * 1024:
        return jsonify({'status': 'error', 'message': 'Ticket details are too large.'}), 413

    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'status': 'error', 'message': 'Please submit the ticket form.'}), 400

    if data.get('website'):
        return jsonify({'status': 'success'}), 202

    name = data.get('name')
    email = data.get('email')
    category = data.get('category')
    details = data.get('details')
    if not all(isinstance(value, str) for value in (name, email, category, details)):
        return jsonify({'status': 'error', 'message': 'Complete each required field.'}), 400

    ticket = {
        'name': name.strip(),
        'email': email.strip(),
        'category': category,
        'details': details.strip()
    }
    if (
        not ticket['name']
        or len(ticket['name']) > 120
        or len(ticket['email']) > 254
        or any(ord(character) < 32 for character in ticket['name'])
        or not valid_ticket_email(ticket['email'])
        or ticket['category'] not in TICKET_CATEGORIES
        or not ticket['details']
        or len(ticket['details']) < 10
        or len(ticket['details']) > 5000
        or any(ord(character) < 32 and character not in '\r\n\t' for character in ticket['details'])
    ):
        return jsonify({'status': 'error', 'message': 'Check your details and try again.'}), 400

    try:
        send_ticket_email(ticket)
    except RuntimeError as error:
        app.logger.warning('Ticket email configuration error: %s', error)
        return jsonify({'status': 'error', 'message': 'Ticket email is not configured yet. Please contact Internal IT directly.'}), 503
    except (OSError, smtplib.SMTPException):
        app.logger.exception('Unable to send askRenewal ticket email.')
        return jsonify({'status': 'error', 'message': 'We could not send your ticket. Please try again or contact Internal IT directly.'}), 502

    return jsonify({'status': 'success', 'message': 'Your ticket has been sent to Internal IT.'}), 201

# Serve index.html at root
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
