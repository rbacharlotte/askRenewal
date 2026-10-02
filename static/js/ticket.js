const ticketForm = document.getElementById('ticket-form');
const ticketStatus = document.getElementById('ticket-status');
const ticketSubmit = document.getElementById('ticket-submit');

ticketForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  ticketStatus.textContent = 'Sending your ticket...';
  ticketStatus.className = 'text-sm text-gray-600';
  ticketSubmit.disabled = true;

  const formData = new FormData(ticketForm);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'We could not send your ticket. Please try again.');
    }

    ticketStatus.textContent = 'Your ticket was sent to Internal IT.';
    ticketStatus.className = 'text-sm font-medium text-green-700';
    ticketForm.reset();
  } catch (error) {
    ticketStatus.textContent = error.message || 'We could not send your ticket. Please try again.';
    ticketStatus.className = 'text-sm font-medium text-red-700';
  } finally {
    ticketSubmit.disabled = false;
  }
});