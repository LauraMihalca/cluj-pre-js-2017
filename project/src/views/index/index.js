(function () {
    const mainContent = document.getElementById('content');

    let evaluationsArray = localStorageGetter('evaluationsArray');
    if (evaluationsArray == null) {
        evaluationsArray = [];
        localStorageSetter('evaluationsArray', evaluationsArray);
    }

    const pagesObject = getDefaultObject();

    const redirectToFunction = function (object) {
        const component = ComponentConstructor(object);
        mainContent.innerHTML = component.view.markup;
        component.setEvents.initEvents(redirectToFunction);
        if (component.setEvents.populate !== undefined) {
            component.setEvents.populate();
        }
    };

    function getLoggedIn() {
        const user = localStorageGetter('isLogged');
        return !!user;
    }
    if (getLoggedIn()) pagesObject.evaluations = true;
    else pagesObject.login = true;

    redirectToFunction(pagesObject);
}());

