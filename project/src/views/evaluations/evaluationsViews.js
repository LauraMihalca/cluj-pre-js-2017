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
        <td><button id="${constructId(options.name)}" data-name="${constructId(options.name)}">Detalii</button></td>
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
        ${NAV()}
        ${EvaluationsTable({
        headings: getHeadings(),
        items: getRows(),
    })}
        ${Footer()}
    `;
};

