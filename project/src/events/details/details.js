function redirectToDetails() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = DetaliiPage();

    const evaluationsArray = JSON.parse(localStorage.getItem('evaluationsArray'));
    const currentPerson = findCurrentPersonDetails(evaluationsArray, this.dataset.name);

    setEvent('new-evaluation', redirectToNewEvaluation);
    setEvent('evaluations', redirectToEvaluation);
}

function findCurrentPersonDetails(evaluationsArray, dataName) {
    let currentPerson = {};
    evaluationsArray.forEach((element) => {
        if (constructId(element.inputData.candidate) === dataName) {
            currentPerson = element;
        }
    });
    return currentPerson;
}

