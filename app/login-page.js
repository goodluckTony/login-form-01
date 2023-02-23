function entrance() {
    let usersData = JSON.parse(localStorage.getItem('users'));
    let email = document.querySelector('.login').value;
    let password = document.querySelector('.password').value;
    // if (loginVal === usersData.email && pwdVal === usersData.password) {
    //     console.log(userData)
    // }

    const userExists = usersData.some(user => {
        return user.email === email && user.password === password
    });
    if (userExists) {
        console.log('successfully signed in')
    } else {
        console.log('invalid data')
    }
}

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