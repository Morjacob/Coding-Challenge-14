async function fetchTickets() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const ticketContainer = document.getElementById('ticketContainer');
    const errorMessage = document.getElementById('errorMessage');
    const loadingIndicator = document.getElementById('loadingIndicator');

// will not show "loading..." when fetching tickets
    loadingIndicator.style.display = 'block';

    try {  

        const response = await fetch(apiUrl); 
        
        if (!response.ok) {
            throw new Error(`Network response failed: ${response.statusText}`);
        }

//converts the JSON data from the API 
        const tickets = await response.json(); 
        
        if (tickets.length === 0) {
            throw new Error('No tickets fetched.');
        }

//dynamically inserts tickets in to the ticket container
        ticketContainer.innerHTML = tickets.map(ticket => `
            <div class="ticket">
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
            </div>
        `).join('');
        
    } catch (error) {
 
        errorMessage.textContent = 'Error fetching tickets: ' + error.message;
        errorMessage.style.display = 'block';

    } finally {
    loadingIndicator.style.display = 'none';
};
}

window.onload = fetchTickets;

        