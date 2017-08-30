const checkCredentials = function (name, pass) {
    const error = document.getElementsByClassName('error-class');
    if (name === 'user' && pass === 'user') redirectToEvaluation();
    else {
        error[0].style.display = 'block';
    }
};

function login(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    e.preventDefault();
    checkCredentials(username, password);
}
