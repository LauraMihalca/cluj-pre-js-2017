const checkCredentials = function (name, pass) {
    if (name === 'user' && pass === 'user') redirectToEvaluation();
    else {
        alert('Wrong Credentials! Try again!');
    }
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    checkCredentials(username, password);
}
