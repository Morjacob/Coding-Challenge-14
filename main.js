

        async function fetchTickets() {
            const ticketContainer = document.getElementById('ticketContainer');
            const errorMessage = document.getElementById('errorMessage');
        
            try {
                const tickets = await fetchTickets(); 
        
         
                if (tickets.length === 0) {
                    throw new Error('No tickets found.');
                }
        

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
            }
        }
  
        window.onload = fetchTickets;
        