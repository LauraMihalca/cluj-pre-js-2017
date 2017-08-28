window.onload = function () {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = LoginPage();

    const loginButton = document.querySelector('.login-form-button');

    const checkCredentials = function (name, pass) {
        if (name === 'user' && pass === 'user') redirectToEvaluation();
        else {
            alert('Wrong Credentials! Try again!');
        }
    };

    loginButton.addEventListener('click', login);

    function setLogoutEvent() {
        const logoutButton = document.querySelector('.eval-header-logout-button');   
        logoutButton.addEventListener('click', logout);
    }

    function setNavEvents(className, redirectToFunction) {
        const nav = document.querySelector(className);
        nav.addEventListener('click', redirectToFunction);
    }

    function redirectToEvaluation() {
        mainContent.innerHTML = EvaluationsPage();
        setNavEvents('.new-evaluation', redirectToNewEvaluation);
        setLogoutEvent();
    }

    function redirectToNewEvaluation() {
        mainContent.innerHTML = NewEvaluationsPage();
        setNavEvents('.evaluations', redirectToEvaluation);
        setLogoutEvent();
    }

    function login() {
        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;
        checkCredentials(username, password);
    }

    function logout() {
        mainContent.innerHTML = LoginPage();
    }
};
