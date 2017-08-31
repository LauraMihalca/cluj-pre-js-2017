const checkCredentials = function (name, pass) {
    const error = document.getElementsByClassName('error-class');
    if (name === 'user' && pass === 'user') {
        localStorageSetter('isLogged', true);
        const pagesObject = getDefaultObject();
        pagesObject.evaluations = true;
        return pagesObject;
    }
    error[0].style.display = 'block';
    return null;
};

const LoginEvents = function () {
    this.initEvents = function (build) {
        const loginButton = document.getElementById('login');
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const pagesObject = checkCredentials(username, password);
            if (pagesObject != null) build(pagesObject);
        });
    };
};
