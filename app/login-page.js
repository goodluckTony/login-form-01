function entrance() {

    let loginVal = document.querySelector('.login').value;
    let passVal = document.querySelector('.password').value;

    if (loginVal === 'admin' && passVal === '1111') {
        // alert('successfully logged');
        document.querySelector('.login-condition').innerHTML = 'seccessfully logined';
        document.querySelector('.login-condition').style.color = '#09ff05';
    } else {
        // alert('incorrect login or password');
        document.querySelector('.login-condition').innerHTML = 'invalid data';
        document.querySelector('.login-condition').style.color = 'red';
    }
};