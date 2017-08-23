const EvaluationsPage = function() {
    return `
        ${NAV()}
        ${EvaluationsTable()}
        ${Footer()}
    `;
}

const EvaluationsTable = function() {
    return `
            <div class="eval-section">
            <section>
                    <table class="eval-section-table">
                    <tr>
                        <th>Nume</th>
                        <th>Tehnologie</th>
                        <th>Nivel</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Popescu Adrian</td>
                        <td>Javascript</td>
                        <td>Mid2</td>
                        <td><a href="">Detalii</a></td>
                    </tr>
                    <tr>
                        <td>Dragan Roxana</td>
                        <td>PHP</td>
                        <td>Mid1</td>
                        <td><a href="">Detalii</a></td>
                    </tr>
                    <tr>
                        <td>Florescu Mihai</td>
                        <td>Javascript</td>
                        <td>Junior3</td>
                        <td><a href="">Detalii</a></td>
                    </tr>
                    <tr>
                        <td>Gheorghe Andrei</td>
                        <td>Ruby</td>
                        <td>Senior1</td>
                        <td><a href="">Detalii</a></td>
                    </tr>
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
