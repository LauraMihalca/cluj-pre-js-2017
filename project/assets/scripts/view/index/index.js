(function () {
    let evaluationsArray = localStorageGetter('evaluationsArray');
    if (evaluationsArray == null) {
        evaluationsArray = [];
        localStorageSetter('evaluationsArray', evaluationsArray);
    }

    let currentPage = '';
    feedbackApp.redirectTo = function (page, dataName) {
        if (currentPage !== '') {
            feedbackApp[currentPage].destroy();
        }
        currentPage = page;
        feedbackApp[page].init();
        if (dataName !== undefined) {
            feedbackApp[page].populate(dataName);
        }
        sessionStorage.setItem('currentPage', page);
    };

    function isLoggedIn() {
        const user = localStorageGetter('isLogged');
        return !!user;
    }


    let pageToGo = '';
    if (isLoggedIn()) {
        pageToGo = 'evaluations';
    } else {
        pageToGo = 'login';
    }


    feedbackApp.redirectTo(pageToGo);
}());

