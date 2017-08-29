function redirectToEvaluation() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = EvaluationsPage();
    setEvent('new-evaluation', redirectToNewEvaluation);
    setEvent('logout', logout);
}
