(function () {
    const EvaluationsTableHeader = function (options) {
        const headings = options.headings.map(el => `<th>${el}</th>`);
        return `
    <tr>
       ${headings.join('')}
    </tr>
    `;
    };

    const EvaluationsTableRow = function (options = {}) {
        return `
    <tr>
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td><label for="${constructId(options.name)}">Detalii</label><button id="${constructId(options.name)}" class="details-button" data-name="${constructId(options.name)}">+</button></td>
    </tr>
    `;
    };

    const EvaluationsTableBody = function (options = {}) {
        const rowsElements = options.items.map(rowObj => EvaluationsTableRow(rowObj));
        return `
    ${rowsElements.join('')}
    `;
    };

    const EvaluationsTable = function (options = {}) {
        return `
    <div class="eval-section">
        <section>
            <table class="eval-section-table">
                ${EvaluationsTableHeader({ headings: options.headings })}
                ${EvaluationsTableBody({ items: options.items })}                    
            </table>
        </section>
    </div>    
    `;
    };

    const EvaluationsPage = function (options = {}) {
        this.markup = `
        ${feedbackApp.common.view.nav}
        ${EvaluationsTable({
        headings: feedbackApp.data.evaluations.headings(),
        items: feedbackApp.data.evaluations.rows(),
    })}
        ${feedbackApp.common.view.footer}
    `;
    };

    feedbackApp.evaluations.view = {
        setup: new EvaluationsPage(),
    };
}());

