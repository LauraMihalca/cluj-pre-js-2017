const ComponentConstructor = function (options) {
    if (options === 'login') {
        return {
            view: new LoginPage(),
            events: new LoginEvents(),
        };
    } else
    if (options === 'evaluations') {
        return {
            view: new EvaluationsPage(),
            events: new EvaluationsEvents(),
        };
    } else
    if (options === 'newEvaluation') {
        return {
            view: new NewEvaluationPage(),
            events: new NewEvaluationEvents(),
        };
    }
    return {
        view: new DetailsPage(),
        events: new DetailsEvents(options),
    };
};
