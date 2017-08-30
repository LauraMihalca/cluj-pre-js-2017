function redirectToNewEvaluation() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = NewEvaluationsPage();
    setEvent('evaluations', redirectToEvaluation);
    setEvent('logout', logout);
    setEvent('submit-button', getFormData);
}

function getSelected(selectId) {
    const e = document.getElementById(`${selectId}`);
    return e.options[e.selectedIndex].value;
}

function getTextarea() {
    const textareaArray = getTextareaArray().items.map((el) => {
        const textareaKey = constructId(el.title);
        const textareaObj = {};
        textareaObj[textareaKey] = document.getElementById(constructId(el.title)).value;
        return textareaObj;
    });
    return textareaArray;
}

function getFieldset() {
    const fieldsetArr = getTechnicalAreaArray().map((el) => {
        const obj = {};
        const objKey = constructId(el.legend);
        obj[objKey] = {};
        const dropDownObj = {};
        el.dropDownOptions.forEach((op) => {
            op.forEach((i) => {
                const dropDownKey = constructIdFieldset(el.legend, i.label);
                dropDownObj[dropDownKey] = getSelected(constructIdFieldset(el.legend, i.label));
                obj[objKey] = dropDownObj;
            });
        });
        return obj;
    });
    return fieldsetArr;
}

function getFormData(e) {
    inputData = {
        candidate: document.getElementById('candidate').value,
        interviewer: document.getElementById('interviewer').value,
        date: document.getElementById('date').value,
    };

    technicalLevel = document.querySelector('input[name="level"]:checked').value;

    textarea = getTextarea();

    fieldset = getFieldset();

    const newEvaluationForm = new FormModel(inputData, technicalLevel, textarea, fieldset);
    e.preventDefault();
    const evaluationsArray = JSON.parse(localStorage.getItem('evaluationsArray'));
    evaluationsArray.push(newEvaluationForm);
    localStorage.setItem('evaluationsArray', JSON.stringify(evaluationsArray));
    redirectToEvaluation();
}
