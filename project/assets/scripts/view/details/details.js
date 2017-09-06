(function () {
    const DetailsCandidateDetailsForm = function (options) {
        return `
    <section> 
        <input type="text" id="candidate" class="input-form" placeholder="Candidate" name="candidate" readonly>
        <input type="text" id="interviewer" class="input-form" placeholder="Interviewer" name="interviewer" readonly>
        <input type="date" id="date" class="input-form-date" name="date" readonly>
    </section>
    `;
    };

    const DetailsTechnicalLevelHeader = function (options) {
        const headings = options.headings.map(el => `<th>${el}</th>`);
        return `
    <tr>
       ${headings.join('')}
    </tr>
    `;
    };

    const DetailsTechnicalLevelPickerHeaders = function (options = {}) {
        return options.map(el => `<th>${el}</th>`);
    };

    const DetailsTechnicalLevelPickerColumns = function (options = {}) {
        const inputs = options.map((inp) => {
            const partialInputs = inp.inputLevels.map(lev => `<input type="radio" id="${lev}" name="level" title="${lev}">`);
            return `<td>${partialInputs.join('')}</td>`;
        });
        return inputs;
    };

    const DetailsTechnicalLevelPicker = function (options = {}) {
        const headers = DetailsTechnicalLevelPickerHeaders(options.headers);
        const columns = DetailsTechnicalLevelPickerColumns(options.columnData);
        return `
    <section>
        <h2 class="title-skin">${options.title}</h2>
        <table>
        <tr>
            ${headers.join('')}
        </tr>
        <tr class="border-lists-skin">
            ${columns.join('')}
        </tr>
        </table>
    </section>
    `;
    };
    const DetailsTextarea = function (options = {}) {
        return `
    <section>
        <h2 class="title-skin">${options.title}</h2>
        <textarea rows="6" id="${constructId(options.title)}" placeholder="${options.placeholder}" readonly></textarea>
    </section>`;
    };

    const DetailsTextareaSection = function (options = {}) {
        const finalArr = options.items.map(el => DetailsTextarea(el));
        return finalArr.join('');
    };


    const DetailsDropDownSelector = function (options = {}, legend = '') {
        const finalArr = options.map((el) => {
            const dropDownOptions = el.options.map(op => `<option value="${op}">${op}</option>`);
            const name = constructIdFieldset(legend, el.label);
            return `
        <label for="${name}" class="default-label default-label-skin default-font-label">${el.label}</label>
        <select name="${name}" id="${name}">
            ${dropDownOptions.join('')}
        </select>
        `;
        });
        return finalArr.join('');
    };

    const DetailsLi = function (options = {}) {
        const result = options.map(el => DetailsDropDownSelector(el));
        return `<li>${result.join('')}</li>`;
    };


    const DetailsFieldset = function (options = {}) {
        const selectArray = options.dropDownOptions.map(el => `<li>${DetailsDropDownSelector(el, options.legend)}</li>`);
        return `
    <fieldset>
        <legend>${options.legend}</legend>
        <ul>
            ${selectArray.join('')}      
        </ul>
    </fieldset>`;
    };

    const DetailsTechnicalAreaPicker = function (options = {}) {
        const fieldsetArray = options.map(el => DetailsFieldset(el));
        return `
    ${fieldsetArray.join('')}    
    `;
    };


    const DetailsPage = function () {
        feedbackApp.data.newEvaluation.technicalAreaItems()
            .then((data) => {
                this.markup = `
                        ${feedbackApp.common.view.nav}
                        <div class="new-eval">
                            <form id="new_eval_form">
                                ${DetailsCandidateDetailsForm()}
                                ${DetailsTechnicalLevelPicker(feedbackApp.data.newEvaluation.technicalLevelItems())}
                                ${DetailsTextareaSection(feedbackApp.data.newEvaluation.textareaItems())}
                                ${DetailsTechnicalAreaPicker(data)}
                                <input class="new-eval-button new-eval-button-skin default-font" id="submit-button" type="submit" value="SUBMIT"/>
                            </form>
                        </div>
                        ${feedbackApp.common.view.footer}`;
            }).catch((error) => {
                console.log(error);
            });
    };
    feedbackApp.details.view = {
        setup: new DetailsPage(),
    };
}());
