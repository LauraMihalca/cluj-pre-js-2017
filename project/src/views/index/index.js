(function () {
    const mainContent = document.getElementById('content');

    let evaluationsArray = localStorageGetter('evaluationsArray');
    if (evaluationsArray == null) {
        evaluationsArray = [];
        localStorageSetter('evaluationsArray', evaluationsArray);
    }

    const pagesObject = getDefaultObject();

    const build = function (object) {
        const component = ComponentConstructor(object);
        mainContent.innerHTML = component.view.markup;
        component.initEvents.initEvents(build);
    };

    function getLoggedIn() {
        const user = localStorageGetter('isLogged');
        return !!user;
    }
    if (getLoggedIn()) pagesObject.evaluations = true;
    else pagesObject.login = true;

    build(pagesObject);
}());

