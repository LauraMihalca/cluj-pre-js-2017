function redirectToEvaluation() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = EvaluationsPage();
    setEvent('new-evaluation', redirectToNewEvaluation);
    setEvent('logout', logout);
    const allButtonsObject = document.getElementsByTagName('button');
    const allButtonsArray = Array.prototype.slice.call(allButtonsObject);
    allButtonsArray.forEach((element) => {
        const id = element.getAttribute('id');
        setEvent(id, redirectToDetails);
    });
}
