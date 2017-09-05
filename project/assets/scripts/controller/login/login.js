const checkCredentials = function (name, pass) {
    const error = document.getElementsByClassName('error-class');
    if (name === 'user' && pass === 'user') {
        localStorageSetter('isLogged', true);
        const pagesObject = 'evaluations';
        return pagesObject;
    }
    error[0].style.display = 'block';
    return null;
};

const LoginEvents = function () {
    this.init = function (redirectToFunction) {
        const loginButton = document.getElementById('login');
        loginButton.addEventListener('click', login.bind(null, redirectToFunction));
    };
    this.destroy = function () {
        removeEvents('login', login);
    };
};

const login = function (redirectToFunction, e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const pagesObject = checkCredentials(username, password);
    if (pagesObject != null) {
        redirectToFunction(pagesObject);
    }
};
