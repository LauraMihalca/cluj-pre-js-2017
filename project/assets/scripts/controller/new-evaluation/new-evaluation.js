(function () {
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
        const textareaArray = feedbackApp.data.newEvaluation.textareaItems().items.map((el) => {
            const textareaKey = constructId(el.title);
            const textareaObj = {};
            textareaObj[textareaKey] = document.getElementById(constructId(el.title)).value;
            return textareaObj;
        });
        return textareaArray;
    }

    function getFieldset(data) {
        return data.reduce((el) => {
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
        }, []);
    }


    function prepareForm(data) {
        inputData = {
            candidate: document.getElementById('candidate').value,
            interviewer: document.getElementById('interviewer').value,
            date: document.getElementById('date').value,
        };

        technicalLevel = document.querySelector('input[name="level"]:checked').value;

        textarea = getTextarea();

        return new FormModel(inputData, technicalLevel, textarea, getFieldset(data));
    }

    function getFormData() {
        feedbackApp.data.newEvaluation.technicalAreaItems().then((data) => {
            const evaluationsArray = localStorageGetter('evaluationsArray');
            evaluationsArray.push(prepareForm(data));
            localStorageSetter('evaluationsArray', evaluationsArray);
        });
    }

    feedbackApp.newEvaluation.events = {
        setup: new NewEvaluationEvents(),
    };
}());
