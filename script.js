// script.js
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;

    if (!departure || !arrival || !departureDate || !passengers) {
        alert('Please fill in all required fields.');
        return;
    }

    const confirmationMessage = `Your flight from ${departure} to ${arrival} on ${departureDate} ` +
        `${returnDate ? `and returning on ${returnDate} ` : ''}for ${passengers} passenger(s) is booked.`;

    const messageElement = document.getElementById('confirmationMessage');
    messageElement.textContent = confirmationMessage;
    messageElement.classList.remove('hidden');
    messageElement.style.marginTop = "1rem";
    messageElement.style.color = "green";
    messageElement.style.fontWeight = "bold";
});
