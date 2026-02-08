function updateFilter() {
    const ticketType = document.getElementById('ticket-type-filter').value.toLowerCase();
    const ticketStatus = document.getElementById('ticket-status-filter').value.toLowerCase();
    let rows = document.querySelectorAll(".ticket-list tbody tr");
    for (const row of rows) {
        let typeGood = ticketType === 'all' || row.children[1].innerHTML.toLowerCase() === ticketType;
        let statusGood = ticketStatus === 'all' || row.children[2].innerHTML.toLowerCase() === ticketStatus;
        if (typeGood && statusGood) row.style.display = '';
        else row.style.display = 'none';
    }
}