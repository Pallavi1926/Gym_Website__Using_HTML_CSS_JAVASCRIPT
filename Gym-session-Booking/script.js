document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const session = document.getElementById('session').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Basic form validation
    let isValid = true;

    // Name validation
    if (name === "" || name.length < 3) {
        isValid = false;
        showError("name", "Name must be at least 3 characters long.");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        showError("email", "Please enter a valid email address.");
    }

    // Session validation
    if (session === "") {
        isValid = false;
        showError("session", "Please select a session.");
    }

   // Date validation
   const currentDate = new Date();
   const selectedDate = new Date(date);
   if (selectedDate <= currentDate) {
       isValid = false;
       showError("date", "Please select a future date for the session.");
   }

   // Time validation
   if (time === "") {
    isValid = false;
    showError("time", "Please select a preferred time.");
}

if (isValid) {
    // Save to localStorage (optional)
    localStorage.setItem('gymBooking', JSON.stringify({ name, email, session, date, time }));

    // Show a confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `Thank you, ${name}! Your <strong>${session}</strong> session is booked for <strong>${date}</strong> at <strong>${time}</strong>.`;
    confirmationMessage.style.display = 'block';

    // Clear the form
    document.getElementById('bookingForm').reset();
}
});

