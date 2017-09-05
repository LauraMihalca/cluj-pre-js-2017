const NewEvaluationEvents = function () {
    this.init = function (redirectToFunction) {
        setNavEvent('evaluations', addEvent.bind(null, 'evaluations', redirectToFunction));
        document.getElementById('evaluations').classList.remove('navigation-bar-active');
        document.getElementById('new-evaluation').classList.add('navigation-bar-active');
        setNavEvent('logout', addEvent.bind(null, 'login', redirectToFunction));

        const submitBtn = document.getElementById('submit-button');
        submitBtn.addEventListener('click', getFormData);
    };
    this.destroy = function (redirectToFunction) {
        removeEvents('evaluations', addEvent.bind(null, 'evaluations', redirectToFunction));
        removeEvents('logout', addEvent.bind(null, 'login', redirectToFunction));
        removeEvents('submit-button', getFormData);
    };
};

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

function getFormData() {
    inputData = {
        candidate: document.getElementById('candidate').value,
        interviewer: document.getElementById('interviewer').value,
        date: document.getElementById('date').value,
    };

    technicalLevel = document.querySelector('input[name="level"]:checked').value;

    textarea = getTextarea();

    fieldset = getFieldset();

    const newEvaluationForm = new FormModel(inputData, technicalLevel, textarea, fieldset);
    const evaluationsArray = localStorageGetter('evaluationsArray');
    evaluationsArray.push(newEvaluationForm);
    localStorageSetter('evaluationsArray', evaluationsArray);
}
