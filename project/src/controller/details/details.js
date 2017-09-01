const DetailsEvents = function (options = {}) {
    this.initEvents = function (redirectToFunction) {
        setEvent('new-evaluation', 'newEvaluation', redirectToFunction);
        setEvent('evaluations', 'evaluations', redirectToFunction);
        setEvent('logout', 'login', redirectToFunction);
    };
    this.populate = function () {
        const currentCandidateData = getCurrentCandidateData(options);

        document.getElementById('candidate').value = currentCandidateData[0].inputData.candidate;
        document.getElementById('interviewer').value = currentCandidateData[0].inputData.interviewer;
        document.getElementById('date').value = currentCandidateData[0].inputData.date;

        document.getElementById(currentCandidateData[0].technicalLevel).checked = true;
        document.getElementsByName('level').forEach((el) => {
            if (!el.checked) el.disabled = true;
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

const getCurrentCandidateData = function (pagesObject) {
    const evaluationsArray = localStorageGetter('evaluationsArray');
    const finalArr = evaluationsArray.filter((el) => constructId(el.inputData.candidate) === constructId(pagesObject.details.name));
    return finalArr;
};

