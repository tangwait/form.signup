const newPass = document.getElementById('newPass');
const confirmPass = document.getElementById('confirmPass');

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    if (newPass.value !== confirmPass.value) {
        confirmPass.setCustomValidity("Passwords do not match.");
    } else {
        confirmPass.setCustomValidity("");
    }
    
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});
