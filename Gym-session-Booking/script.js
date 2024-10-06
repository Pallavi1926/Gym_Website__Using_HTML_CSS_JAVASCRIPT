document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const session = document.getElementById('session').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

