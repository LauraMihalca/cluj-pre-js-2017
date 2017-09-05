function setNavEvent(idName, addListenerFunction) {
    const element = document.getElementById(idName);
    element.addEventListener('click', addListenerFunction);
}

function removeEvents(idName, eventFunction) {
    const newEvaluationNav = document.getElementById(idName);
    newEvaluationNav.removeEventListener('click', eventFunction);
}

const addEvent = function (page, redirectToFunction) {
    if (page === 'login') {
        localStorageSetter('isLogged', false);
    }
    redirectToFunction(page);
};

