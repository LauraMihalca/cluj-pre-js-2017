(function () {
    const DetailsEvents = function (options = {}) {
        this.init = function (redirectToFunction) {
            setNavEvent('new-evaluation', addEvent.bind(null, 'newEvaluation', redirectToFunction));
            setNavEvent('evaluations', addEvent.bind(null, 'evaluations', redirectToFunction));
            setNavEvent('logout', addEvent.bind(null, 'login', redirectToFunction));
        };
        this.destroy = function (redirectToFunction) {
            removeEvents('new-evaluation', addEvent.bind(null, 'newEvaluation', redirectToFunction));
            removeEvents('evaluations', addEvent.bind(null, 'newEvaluation', redirectToFunction));
            removeEvents('logout', addEvent.bind(null, 'login', redirectToFunction));
        };
        this.populate = function (currentName) {
            const currentCandidateData = getCurrentCandidateData(currentName);
            console.log(currentName);
            document.getElementById('candidate').value = currentCandidateData[0].inputData.candidate;
            document.getElementById('interviewer').value = currentCandidateData[0].inputData.interviewer;
            document.getElementById('date').value = currentCandidateData[0].inputData.date;

            document.getElementById(currentCandidateData[0].technicalLevel).checked = true;
            document.getElementsByName('level').forEach((el) => {
                const elem = el;
                if (!elem.checked) {
                    elem.disabled = true;
                }
            });

            currentCandidateData[0].textarea.forEach((el) => {
                const key = Object.keys(el)[0];
                disableElement(key, el);
            });

            currentCandidateData[0].fieldset.forEach((el) => {
                const key = Object.keys(el);
                const insideKeys = Object.keys(el[key]);
                insideKeys.forEach((e) => {
                    disableElement(e, el[key]);
                });
            });
        };
    }
;

    const getCurrentCandidateData = function (currentName) {
        const evaluationsArray = localStorageGetter('evaluationsArray');
        const finalArr = evaluationsArray.filter(el =>
            constructId(el.inputData.candidate) === currentName);
        return finalArr;
    };

    feedbackApp.details.events = {
        setup: new DetailsEvents(),
    };
}());

