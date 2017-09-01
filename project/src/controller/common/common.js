function setEvent(idName, objectAttribute, redirectToFunction) {
    const element = document.getElementById(idName);
    const tableName = element.dataset.name;
    let pagesObject = {};
    const addEvent = function (e) {
        e.preventDefault();
        if (objectAttribute === 'login') {
            localStorageSetter('isLogged', false);
        }
        if (tableName) {
            pagesObject = prepareDetailsObject(tableName);
        } else {
            pagesObject = setPagesObject(objectAttribute);
        }
        redirectToFunction(pagesObject);
    };
    element.addEventListener('click', addEvent);
}

function setPagesObject(objectAttribute) {
    const pagesObject = getDefaultObject();
    pagesObject[objectAttribute] = true;
    return pagesObject;
}

