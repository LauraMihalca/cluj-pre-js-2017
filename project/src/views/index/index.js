window.onload = function () {
    const mainContent = document.getElementById('content');
    let evaluationsArray = localStorage.getItem('evaluationsArray');
    if (evaluationsArray == null) {
        evaluationsArray = [];
        localStorage.setItem('evaluationsArray', JSON.stringify(evaluationsArray));
    }
    mainContent.innerHTML = LoginPage();
    setEvent('login', login);
};
