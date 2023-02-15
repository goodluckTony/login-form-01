function entrance(e) {
    e.preventDefault();
    let loginVal = document.querySelector('.login').value;
    let passVal = document.querySelector('.password').value;

    if (loginVal === 'admin' && passVal === '1111') {
        // alert('successfully logged');
        document.querySelector('.username-condition').innerHTML = 'valid username';
        document.querySelector('.username-condition').style.color = '#09ff05';
        document.querySelector('.password-condition').innerHTML = 'valid password';
        document.querySelector('.password-condition').style.color = '#09ff05';
    } else {
        // alert('incorrect login or password');
        document.querySelector('.username-condition').innerHTML = 'invalid username';
        document.querySelector('.username-condition').style.color = 'red';
        document.querySelector('.password-condition').innerHTML = 'invalid password';
        document.querySelector('.password-condition').style.color = 'red';
    }
};