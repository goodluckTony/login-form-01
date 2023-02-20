const form = document.querySelector('reg-form');
const formMessage = document.querySelector('reg-condition');
const emailMessage = document.querySelector('email-condition');
const passMessage = document.querySelector('password-condition');
const confirmPassMessage = document.querySelector('confirm-pass-condition');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (password !== confirmPassword) {
        passMessage.innerText = 'Passwords do not match each other';
    } else {
        formMessage.innerText = 'Welcome, my Dear friend';

        const verifyLink = `https://api.example.com/verify-email?email=${email}`;
        fetch(verificationLink)
            .then(response => {
                if (response.ok) {
                    formMessage.innerText = 'Verify email sent';
                } else {
                    emailMessage.innerText = 'Error sending verify email';
                }
            })
            .catch(error => {
                console.log(error);
            });
        
    }
});