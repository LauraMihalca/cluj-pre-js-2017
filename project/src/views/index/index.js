window.onload = function () {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = LoginPage();
    setEvent('login', login);
};
