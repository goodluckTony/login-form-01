function entrance() {
    let loginMessage = document.querySelector('.login-condition');
    let email = document.querySelector('.login').value;
    let password = document.querySelector('.password').value;
    
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
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
            loginMessage.innerHTML = `${res.errorMessage}`;
            loginMessage.style = 'color: red';
            console.log(response);
        } else {
            loginMessage.innerHTML = `User successfully logged in`;
            loginMessage.style = 'color: green';
            console.log(response);
        }
    })
    // .catch(error => {
    //     console.log(error)
    // })
}

// let usersData = JSON.parse(localStorage.getItem('users'));

// const userExists = usersData.some(user => {
//     return user.email === email && user.password === password
// });
// if (userExists) {
//     console.log('successfully signed in')
// } else {
//     console.log('invalid data')
// }

// function entrance() {
//     let loginVal = document.querySelector('.login').value;
//     let passVal = document.querySelector('.password').value;
//     if (loginVal === 'admin' && passVal === '1111') {
//         // alert('successfully logged');
//         document.querySelector('.login-condition').innerHTML = 'seccessfully logined';
//         document.querySelector('.login-condition').style.color = '#09ff05';
//     } else {
//         // alert('incorrect login or password');
//         document.querySelector('.login-condition').innerHTML = 'invalid data';
//         document.querySelector('.login-condition').style.color = 'red';
//     }
// };

// window.onload = function() {
//     const emailVal = document.querySelector('.email').value;
//     const savedEmail = localStorage.getItem(userData.email);
//     const passVal = document.querySelector('.password').value;
//     const savedPass = localStorage.getItem(userData.password);
//     if (savedEmail && savedPass) {
//         emailVal = savedEmail;
//         passVal = savedPass;
//     }
// }