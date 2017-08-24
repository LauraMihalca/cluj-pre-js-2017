const EvaluationsPage = function(options = {}) {
    const rows = [{
        name: "Popescu Adrian",
        technology: "Javascript",
        level: "Mid2"
    },
    {
        name: "Popescu Adrian",
        technology: "Javascript",
        level: "Mid2"
    },
    {
        name: "Popescu Adrian",
        technology: "Javascript",
        level: "Mid2"
    },
    {
        name: "Popescu Adrian",
        technology: "Javascript",
        level: "Mid2"
    }];
    const headings = ['Nume', 'Tehnologie', 'Nivel', ''];
    return `
        ${NAV()}
        ${EvaluationsTable({
            itemsHeadings: headings,
            items: rows
        })}
        ${Footer()}
    `;
}

const EvaluationsTableHeader = function(options){
    const headings = [];
    options.headings.forEach(function(el) {
        const generatedEl = ` <th>${el}</th>`;
        headings.push(generatedEl);
    });
    const headingsEl = headings.join('');
    return `
    <tr>
       ${headingsEl}
    </tr>
    `;
}

const EvaluationsTableRow = function(options = {}) {
    return `
    <tr>
        <td>${options.name}</td>
        <td>${options.technology}</td>
        <td>${options.level}</td>
        <td><a href="">Detalii</a></td>
    </tr>
    `;
}

const EvaluationsTableBody = function(options = {}){
    const rowsElements = options.items.map(function(rowObj){
        return EvaluationsTableRow(rowObj);
    });
    const rowsEl = rowsElements.join('');
    return `
        ${rowsEl}
    `;
}

const EvaluationsTable = function(options = {}) {
    return `
            <div class="eval-section">
            <section>
                    <table class="eval-section-table">
                        ${EvaluationsTableHeader({
                            headings: options.itemsHeadings
                        })}
                        ${EvaluationsTableBody({
                            items: options.items
                        })}                    
                </table>
            </section>
        </div>    
    `;
}


const evaluationsHTML = EvaluationsPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = evaluationsHTML;
}

