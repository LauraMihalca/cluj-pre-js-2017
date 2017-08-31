function setEvent(idName, objectAttribute, build) {
    const element = document.getElementById(idName);
    const addEvent = function (e) {
        e.preventDefault();
        if (objectAttribute === 'login') localStorageSetter('isLogged', false);
        const pagesObject = getPagesObject(objectAttribute);
        build(pagesObject);
    };
    element.addEventListener('click', addEvent);
}

function getPagesObject(objectAttribute) {
    const pagesObject = getDefaultObject();
    pagesObject[objectAttribute] = true;
    return pagesObject;
}

function logout() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = LoginPage();
}

