const EvaluationsEvents = function () {
    this.initEvents = function (redirectToFunction) {
        setEvent('new-evaluation', 'newEvaluation', redirectToFunction);
        setEvent('logout', 'login', redirectToFunction);
        const allButtonsObject = document.getElementsByTagName('button');
        const allButtonsArray = Array.prototype.slice.call(allButtonsObject);
        allButtonsArray.forEach((element) => {
            const id = element.getAttribute('id');
            setEvent(id, 'details', redirectToFunction);
        });
    };
}
;
