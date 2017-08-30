const DetaliiCandidateDetailsForm = function () {
    return `
    <section> 
        <input type="text" id="candidate" placeholder="Candidate" name="candidate" readonly>
        <input type="text" id="interviewer" placeholder="Interviewer" name="interviewer" readonly>
        <input type="date" id="date" name="date" readonly>
    </section>
    `;
};

const DetaliiTechnicalLevelHeader = function (options) {
    const headings = options.headings.map(el => `<th>${el}</th>`);
    return `
    <tr>
       ${headings.join('')}
    </tr>
    `;
};

const DetaliiTechnicalLevelPickerHeaders = function (options = {}) {
    return options.map(el => `<th>${el}</th>`);
};

const DetaliiTechnicalLevelPickerColumns = function (options = {}) {
    const inputs = options.map((inp) => {
        const partialInputs = inp.inputLevels.map(lev => `<input type="radio" id="${lev}" name="level" title="${lev}" value="${lev}"/>`);
        return `<td>${partialInputs.join('')}</td>`;
    });
    return inputs;
};

const DetaliiTechnicalLevelPicker = function (options = {}) {
    const headers = TechnicalLevelPickerHeaders(options.headers);
    const columns = TechnicalLevelPickerColumns(options.columnData);
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
const DetaliiTextarea = function (options = {}) {
    return `
    <section>
        <h2 class="title-skin">${options.title}</h2>
        <textarea rows="6" id="${constructId(options.title)}" placeholder="${options.placeholder}"></textarea>
    </section>`;
};

const DetaliiTextareaSection = function (options = {}) {
    const finalArr = options.items.map(el => Textarea(el));
    return finalArr.join('');
};


const DetaliiDropDownSelector = function (options = {}, legend = '') {
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

const DetaliiLi = function (options = {}) {
    const result = options.map(el => DropDownSelector(el));
    return `<li>${result.join('')}</li>`;
};


const DetaliiFieldset = function (options = {}) {
    const selectArray = options.dropDownOptions.map(el => `<li>${DropDownSelector(el, options.legend)}</li>`);
    return `
    <fieldset>
        <legend>${options.legend}</legend>
        <ul>
            ${selectArray.join('')}      
        </ul>
    </fieldset>`;
};

const DetaliiTechnicalAreaPicker = function (options = {}) {
    const fieldsetArray = options.map(el => Fieldset(el));
    return `
    ${fieldsetArray.join('')}    
    `;
};

const DetaliiPage = function () {
    return `
    ${NAV()}
    <div class="new-eval">
        <form id="new_eval_form">
            ${DetaliiCandidateDetailsForm()}
            ${DetaliiTechnicalLevelPicker(getTechnicalLevelArray())}
            ${DetaliiTextareaSection(getTextareaArray())}
            ${DetaliiTechnicalAreaPicker(getTechnicalAreaArray())}
        </form>
    </div>
    ${Footer()}
    `;
};
