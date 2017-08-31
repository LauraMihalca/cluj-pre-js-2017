const EvaluationsEvents = function () {
    this.initEvents = function (build) {
        setEvent('new-evaluation', 'newEvaluation', build);
        setEvent('logout', 'login', build);
    };
}
;
