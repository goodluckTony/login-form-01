
// registration
const form = document.querySelector('.reg-form');
const formMessage = document.querySelector('.reg-condition');
const emailInput = document.querySelector('.email')
const emailMessage = document.querySelector('.email-condition');
const passMessage = document.querySelector('.password-condition');
const confirmPassMessage = document.querySelector('.confirm-pass-condition');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (password !== confirmPassword) {
        passMessage.innerText = 'Passwords do not match each other';
    } else {
        formMessage.innerText = 'Welcome, my Dear friend';

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validEmail)) {
            formMessage.innerHTML = 'valid email address'
        } else {
            formMessage.innerHTML = 'invalid email address'
        }
    }
    let usersData = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
        'email' : email,
        'password' : password
    }
    
    const emailExists = usersData.some(user => {
        return user.email === email
    })
    if (emailExists) {
        emailInput.style = 'border: 1px solid red;';
        emailMessage.innerHTML = 'this email is already exists';
    } else {
        usersData.push(newUser);
        const usersDataJSON = JSON.stringify(usersData);
        localStorage.setItem("users", usersDataJSON);
        formMessage.innerHTML = 'ready to sign in';
    }
    
    // mailJS
    
    const serviceID = 'service_rs1hoc9';
    const templateID = 'template_5hfm0sf';
    const params = {
        email: email
    };
    emailjs.send(serviceID, templateID, params, 'kjnzRYRw2Q2eLUHMu')
        .then(() => {
        
        alert('Sent!');
        }, (err) => {
        
        alert(JSON.stringify(err));
        });
});