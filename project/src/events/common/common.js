function setEvent(idName, redirectToFunction) {
    const nav = document.getElementById(idName);
    nav.addEventListener('click', redirectToFunction);
}

function logout() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = LoginPage();
}
