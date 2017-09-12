const feedbackApp = {};

(function () {
    feedbackApp.data = {};
    feedbackApp.common = {};
    feedbackApp.login = {
        init: () => {
            render(feedbackApp.login.view.setup);
            setupEvents(feedbackApp.login.events.setup, feedbackApp.redirectTo);
        },
        destroy: () => {
            destroy(feedbackApp.login.events.setup);
        },
    };
    feedbackApp.evaluations = {
        init: () => {
            render(feedbackApp.evaluations.view.setup);
            setupEvents(feedbackApp.evaluations.events.setup, feedbackApp.redirectTo);
        },
        destroy: () => {
            destroy(feedbackApp.evaluations.events.setup);
        },
    };
    feedbackApp.newEvaluation = {
        init: () => {
            render(feedbackApp.newEvaluation.view.setup);
            setupEvents(feedbackApp.newEvaluation.events.setup, feedbackApp.redirectTo);
        },
        destroy: () => {
            destroy(feedbackApp.newEvaluation.events.setup);
        },
    };
    feedbackApp.details = {
        init: () => {
            render(feedbackApp.details.view.setup);
            setupEvents(feedbackApp.details.events.setup, feedbackApp.redirectTo);
        },
        populate: (dataName) => {
            populate(feedbackApp.details.events.setup, dataName);
        },
        destroy: () => {
            destroy(feedbackApp.details.events.setup);
        },
    };
}());
