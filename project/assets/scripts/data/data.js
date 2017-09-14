feedbackApp.data.evaluations = {};
feedbackApp.data.newEvaluation = {};
(function () {
    feedbackApp.data.evaluations = {
        headings: () => ['Name', 'Technology', 'Level', ''],
        rows: () => {
            const evaluationsArray = localStorageGetter('evaluationsArray');
            if (evaluationsArray !== null) {
                const finalArray = evaluationsArray.map((element) => {
                    const userObj = {};
                    userObj.name = element.inputData.candidate;
                    userObj.technology = 'Javascript';
                    userObj.level = element.technicalLevel;
                    return userObj;
                });
                return finalArray;
            }
            return [];
        },
    };
    feedbackApp.data.newEvaluation = {
        technicalLevelItems: () => ({
            title: 'Technical Level',
            headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
            columnData: [
                {
                    inputLevels: ['Trainee'],
                },
                {
                    inputLevels: ['Junior1', 'Junior2', 'Junior3'],
                },
                {
                    inputLevels: ['Middle1', 'Middle2', 'Middle3'],
                },
                {
                    inputLevels: ['Senior1', 'Senior2', 'Senior3'],
                },

            ] }),
        textareaItems: () => ({
            items: [
                {
                    title: 'Should the candidate be hired?',
                    placeholder: 'The type of project that is suitable for the candidate. Is guidance required for the candidate ?',
                },
                {
                    title: 'General Impression',
                    placeholder: '*required',
                },
                {
                    title: 'Workflow, Leadership & Soft Skills',
                    placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.',
                },
            ],
        }),
        technicalAreaItems: () => {
            const ENDPOINT_URL = 'http://localhost:3000/new-evaluation.json';
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status < 400) {
                            try {
                                const response = JSON.parse(xhr.responseText).items;
                                resolve(response);
                            } catch (e) {
                                reject('Cannot get response');
                            }
                        } else {
                            reject('Status > 400');
                        }
                    }
                };
                xhr.open('GET', ENDPOINT_URL);
                xhr.send();
            });
            return promise;
        },
    };
}());
