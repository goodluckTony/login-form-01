
// registration
const form = document.querySelector('.reg-form');
const formMessage = document.querySelector('.reg-condition');
const emailInput = document.querySelector('.email')
const emailMessage = document.querySelector('.email-condition');
const passMessage = document.querySelector('.password-condition');
const confirmPassMessage = document.querySelector('.confirm-pass-condition');

function sendToLocalStorage(email, password) {
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
}

function sendEmail(email) {
    const serviceID = 'service_rs1hoc9';
    const templateID = 'template_5hfm0sf';
    const params = {
        email: email
    };
    emailjs.send(serviceID, templateID, params, 'kjnzRYRw2Q2eLUHMu')
        .then(() => {
            alert('Sent!');
        }, 
        (err) => {
           alert(JSON.stringify(err));
    });
}
    // check on valid data
function registerHandler(e) {
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

    fetch("http://localhost:3000/api/user", {
        method:'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email: email,
            password: password
        })
        })
        .then(async (response) => {
            if (response.status === 400) {
                let res = await response.json();
                emailMessage.innerHTML = `${res.errorMessage}`;
                emailMessage.style = 'color: red';
                console.log(response);
            } else {
                emailMessage.innerHTML = `User successfully registered`;
                emailMessage.style = 'color: green';
                console.log(response);
            }
        })

        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })

        // .catch(error => {
        //     if (error.status(400)) {
        //         emailMessage.innerHTML = `${error.JSON}`;
        //         emailMessage.style = 'color: red';
        //         console.log(error);
        //     }
        // });

// store user data to local storage
    // sendToLocalStorage(email, password);
    
// mailJS
    // sendEmail(email);
}
form.addEventListener('submit', registerHandler);