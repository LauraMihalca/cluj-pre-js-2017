(function () {
    window.feedbackApp = {};

    const mainContent = document.getElementById('content');

    let evaluationsArray = localStorageGetter('evaluationsArray');
    if (evaluationsArray == null) {
        evaluationsArray = [];
        localStorageSetter('evaluationsArray', evaluationsArray);
    }

    let currentPage = '';

    const redirectToFunction = function (page, dataName) {
        if (currentPage !== '') {
            window.feedbackApp[currentPage].destroy();
        }
        currentPage = page;
        window.feedbackApp[page].init();
        if (dataName !== undefined) {
            window.feedbackApp[page].populate(dataName);
        }
    };

    function getLoggedIn() {
        const user = localStorageGetter('isLogged');
        return !!user;
    }


    const getComponent = function (page) {
        return ComponentConstructor(page);
    };

    const render = function (component) {
        mainContent.innerHTML = component.view.markup;
    };

    const setupEvents = function (component) {
        component.events.init(redirectToFunction);
    };

    const destroy = function (component) {
        component.events.destroy();
    };

    const populate = function (component, dataName) {
        component.events.populate(dataName);
    };

    window.feedbackApp.login = {
        init: () => {
            const component = getComponent('login');
            render(component);
            setupEvents(component);
        },
        destroy: () => {
            const component = getComponent('login');
            destroy(component);
        },
    };
    window.feedbackApp.evaluations = {
        init: () => {
            const component = getComponent('evaluations');
            render(component);
            setupEvents(component);
        },
        destroy: () => {
            const component = getComponent('evaluations');
            destroy(component);
        },
    };
    window.feedbackApp.newEvaluation = {
        init: () => {
            const component = getComponent('newEvaluations');
            render(component);
            setupEvents(component);
        },
        destroy: () => {
            const component = getComponent('newEvaluations');
            destroy(component);
        },
    };
    window.feedbackApp.details = {
        init: () => {
            const component = getComponent('details');
            render(component);
            setupEvents(component);
        },
        populate: (dataName) => {
            const component = getComponent('details');
            populate(component, dataName);
        },
        destroy: () => {
            const component = getComponent('details');
            destroy(component);
        },
    };

    let pageToGo = '';
    if (getLoggedIn()) {
        pageToGo = 'evaluations';
    } else {
        pageToGo = 'login';
    }


    redirectToFunction(pageToGo);
}());

