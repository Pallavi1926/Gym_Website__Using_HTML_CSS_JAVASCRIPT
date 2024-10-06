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

 