const ComponentConstructor = function (options) {
    if (options.login) {
        return {
            view: new LoginPage(),
            setEvents: new LoginEvents(),
        };
    } else
    if (options.evaluations) {
        return {
            view: new EvaluationsPage(),
            setEvents: new EvaluationsEvents(),
        };
    } else
    if (options.newEvaluation) {
        return {
            view: new NewEvaluationPage(),
            setEvents: new NewEvaluationEvents(),
        };
    }
    return {
        view: new DetailsPage(),
        setEvents: new DetailsEvents(options),
    };
};
