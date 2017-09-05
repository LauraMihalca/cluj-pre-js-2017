const EvaluationsEvents = function () {
    this.init = function (redirectToFunction) {
        setNavEvent('new-evaluation', addEvent.bind(null, 'newEvaluation', redirectToFunction));
        setNavEvent('logout', addEvent.bind(null, 'login', redirectToFunction));

        const allButtonsObject = document.getElementsByTagName('button');
        const allButtonsArray = Array.prototype.slice.call(allButtonsObject);
        allButtonsArray.forEach((element) => {
            const id = element.getAttribute('id');
            const detailsBtn = document.getElementById(id);
            detailsBtn.addEventListener('click', redirectToDetails.bind(null, redirectToFunction, detailsBtn.dataset.name));
        });
    };
    this.destroy = function (redirectToFunction) {
        removeEvents('new-evaluation', setNavEvent('new-evaluation', addEvent.bind(null, 'newEvaluation', redirectToFunction)));
        removeEvents('logout', addEvent.bind(null, 'login', redirectToFunction));

        const allButtonsObject = document.getElementsByTagName('button');
        const allButtonsArray = Array.prototype.slice.call(allButtonsObject);
        allButtonsArray.forEach((element) => {
            const id = element.getAttribute('id');
            removeEvents(id, redirectToDetails);
        });
    };
};

const redirectToDetails = function (redirectToFunction, dataName) {
    if (dataName) {
        pages = 'details';
    }
    redirectToFunction(pages, dataName);
};
