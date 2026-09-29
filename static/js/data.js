// data.js

const responses = {
  password: {
    text: "Select which password you need to reset:",
    hasSubMenu: true,
    terminal: false
  },

  email: {
    text: `For email issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close and reopen Outlook (or sign out and back in to the mail app).",
      "Check mail at https://outlook.office.com in a browser to see if the issue is only on your device.",
      "Confirm you are on Wi‑Fi or VPN if you are off-site.",
      "Note any exact error message and whether send, receive, or search is affected."
    ],
    turnaround: "Most email issues: same business day when you call or open a portal ticket; complex mailbox or permission changes may take 1–2 business days.",
    hasSubMenu: false,
    terminal: true
  },

  software: {
    text: "Please select the software from the dropdown:",
    hasSubMenu: true,
    terminal: false
  },

  hardware: {
    text: `Contact Internal IT or submit a ticket: <br> (Internal: Angel/Derrick), 
        <a href="https://forms.office.com/pages/responsepage.aspx?id=-nTBzeyRlE6TkRgmWfkrVlZS8BJzWy9Cpqewcx-rfglUQ0FSSFJETFg1WTEwTFBNTUJTMlpNTlZKUy4u&origin=lprLink&route=shorturl" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>, <br>`,
    troubleshooting: [
      "Restart the device fully (shut down, wait 30 seconds, power on).",
      "For laptops: confirm the charger is connected and the battery is charging.",
      "Check cables, docks, and monitors are seated firmly; try a different port or cable if you can.",
      "Run Windows Update (Settings → Windows Update) and install pending restarts.",
      "Write down the asset tag or serial number and a short description of what failed (won’t turn on, no sound, cracked screen, etc.)."
    ],
    turnaround: "Simple fixes or advice: often same business day; repairs, replacements, or ordering parts usually 2–5 business days depending on stock and vendor.",
    hasSubMenu: false,
    terminal: true
  },

  network: {
    text: `For network issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Turn Wi‑Fi off and on, or disconnect and reconnect to your network.",
      "Restart your PC or phone.",
      "If you work remotely, connect to your company VPN (if you normally use one) and try again.",
      "Try another site or app to see if only one service is down.",
      "If others in your office have the same problem, mention that when you contact support."
    ],
    turnaround: "Local device or Wi‑Fi issues: often resolved same business day; site-wide or ISP outages depend on the provider, typically hours to 1 business day.",
    hasSubMenu: false,
    terminal: true
  },

  other: {
    text: `For all other issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Restart the app or device where you see the problem.",
      "Capture a screenshot of any error message.",
      "Note what you were doing right before it broke and whether it happens every time.",
      "Check whether coworkers have the same issue (helps show if it is just your account or a wider outage)."
    ],
    turnaround: "Varies by issue; many tickets get initial response same business day, with full resolution in 1–3 business days for non-emergency items.",
    hasSubMenu: false,
    terminal: true
  }
};

const softwareSupport = {
  "ms-365-apps": {
    text: `For MS365 Issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close all Office apps, then reopen the one that is failing (Teams, Outlook, Word, etc.).",
      "Check for updates: File → Office Account → Update Options → Update Now (or Windows Update for the suite).",
      "Sign out of Teams/Outlook and sign back in with your work account.",
      "If one app fails, try the same task in the browser (e.g. outlook.office.com or teams.microsoft.com)."
    ],
    turnaround: "Common app or sign-in problems: same business day; licensing or tenant-wide issues may take 1–2 business days.",
    terminal: true
  },

  "enabled": {
    text: `For Enabled + issues, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Use an InPrivate/Incognito window and log in again to rule out cached credentials.",
      "Clear the browser cache or try a different supported browser (Chrome or Edge).",
      "Confirm you are using the correct Enabled+ URL from your internal bookmarks, not an old link.",
      "Note the exact screen or error text and your username (no password) for the ticket."
    ],
    turnaround: "Access and login issues: often 4–8 business hours via ServiceNow; data or configuration requests may take 1–3 business days.",
    terminal: true
  },

  "rforce/rSuite": {
    text: `For rForce/rSuite, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Refresh the page or log out and back in to rForce/rSuite.",
      "Try a private/incognito browser window with no extensions.",
      "Verify your network connection and VPN if you use one off-site.",
      "Record the job or record ID and any error code before opening a ticket."
    ],
    turnaround: "Typical login or performance issues: 1 business day; role or permission changes may take 2–3 business days.",
    terminal: true
  },

  "ensemble": {
    text: `For Ensemble, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Close Ensemble completely and reopen it (or restart the browser session).",
      "Confirm you are on a supported browser and that pop-up blockers are not blocking Ensemble.",
      "Check that your password has not expired in related Andersen systems.",
      "Include order or customer context and screenshots when submitting ServiceNow."
    ],
    turnaround: "Most user-facing issues: response within 1 business day; fixes that need backend changes may take 2–4 business days.",
    terminal: true
  },

  "five9": {
    text: `For Five9 Login Issues, contact internal IT: 
          <a href="https://forms.office.com/r/wSH8WXaGPu?origin=lprLink" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>`,
    troubleshooting: [
      "Confirm you are using the Five9 URL and username provided by IT (not a personal email).",
      "Reset only after checking Caps Lock and trying your current Windows/network password if IT told you they match.",
      "Clear browser cache or try the Five9 softphone/desktop app if the web login fails.",
      "If you were recently hired or changed roles, ask your manager to confirm Five9 access was requested."
    ],
    turnaround: "New access or password resets from internal IT: usually same or next business day once the ticket is submitted.",
    terminal: true
  },

  "other": {
    text: `For any other issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Restart the application and your computer.",
      "Write down the software name, version if known, and the exact error.",
      "Try from another device on the same network to see if the problem follows your account.",
      "Search your team’s internal docs or chat in case there is a known outage."
    ],
    turnaround: "Initial triage: same business day via Apex; resolution time depends on the product, often 1–3 business days.",
    terminal: true
  }
};

const passwordSupport = {
  "windows-login": {
    text: `For Windows Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Check Caps Lock and keyboard layout (US vs other).",
      "If you changed your password recently, use the new password everywhere and lock/unlock once.",
      "Connect to office network or VPN if your device says the password is wrong off-site.",
      "Restart the PC; if you see \"other user,\" choose your normal work account.",
      "Do not keep guessing—after a few failures your account may lock and will need a reset."
    ],
    turnaround: "Password reset or unlock via Apex: often within 30–60 minutes during business hours; locked accounts may take up to same business day.",
    terminal: true
  },

  "ms365-login": {
    text: `For MS365 Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Sign in at https://portal.office.com in a private browser window with your work email.",
      "If prompted for MFA, complete it on your registered phone or approve in the Authenticator app.",
      "Sign out of all Office apps, then sign in again with the same password you use for Windows (if your org syncs them).",
      "Remove old saved passwords in the browser if you recently reset your password."
    ],
    turnaround: "Reset or MFA help: typically same business day; new MFA device setup may take 1 business day if verification is required.",
    terminal: true
  },

  "five9-login": {
    text: `For Five9 Login Issues, contact internal IT: 
          <a href="https://forms.office.com/r/wSH8WXaGPu?origin=lprLink" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>`,
    troubleshooting: [
      "Verify username format with your supervisor (often not your full email).",
      "Try the password IT set at onboarding; do not reuse an old personal Five9 password.",
      "Use the link from IT email or the internal wiki, not a bookmark from a former employer.",
      "Submit a ticket with your full name, location, and whether you never had access or lost access."
    ],
    turnaround: "Internal IT password or provisioning: usually same or next business day.",
    terminal: true
  },

  "enabled-password": {
    text: `For Enabled+ password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Use the corporate password reset process if your org links Enabled+ to Active Directory (try your Windows password after a reset).",
      "Open Enabled+ in incognito mode after any password change.",
      "If you forgot your password, use \"Forgot password\" only if your company enabled self-service; otherwise open ServiceNow.",
      "Never share your password in the ticket—only your user ID and phone number for callback."
    ],
    turnaround: "Fetch password reset: often within 4–8 business hours; same-day if you call during support hours.",
    terminal: true
  },

  "ensemble-password": {
    text: `For Ensemble password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Confirm whether Ensemble uses your Andersen network password or a separate one (ask your lead if unsure).",
      "After a corporate password reset, wait 15–30 minutes and try Ensemble again.",
      "Clear browser saved passwords for Ensemble and type credentials manually.",
      "Open a ServiceNow incident if your account is disabled or you see \"invalid credentials\" after one known-good password."
    ],
    turnaround: "Standard password reset via fetch: typically same business day; complex identity issues up to 2 business days.",
    terminal: true
  },

  "culture-suite-password": {
    text: `For CultureSuite Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Try logging in with your work email and current Windows/network password if HR told you they are linked.",
      "Use \"Forgot password\" on the CultureSuite page if available; check spam for the reset email.",
      "Use a supported browser and disable extensions that block cookies.",
      "Confirm with HR that your CultureSuite account was created for your start date or role change."
    ],
    turnaround: "Apex or vendor reset: usually same business day; new hire access may align with HR provisioning (1–2 business days).",
    terminal: true
  },

  "rforce-password": {
    text: `For rForce/rSuite password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Reset your Andersen/network password first if your site uses single sign-on, then retry rForce.",
      "Log in from an incognito window so old passwords are not auto-filled.",
      "Use ServiceNow to request a reset if self-service is not available—include your dealer/location code if you know it.",
      "Avoid repeated failed attempts; locked accounts require fetch to unlock."
    ],
    turnaround: "Password reset or unlock through fetch: typically within 1 business day; urgent sales-floor lockouts—call for faster handling.",
    terminal: true
  }
};
