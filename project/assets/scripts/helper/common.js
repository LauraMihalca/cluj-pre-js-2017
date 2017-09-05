function constructId(title) {
    return title.split(/[ |,|]/).join('');
}

function constructIdFieldset(legend, label) {
    return `${constructId(legend)}${constructId(label)}`;
}

function getDefaultObject() {
    return {
        login: false,
        evaluations: false,
        newEvaluation: false,
        details: {
            state: false,
            name: '',
        },
    };
}

function prepareDetailsObject(dataName) {
    const pagesObject = getDefaultObject();
    pagesObject.details.state = true;
    pagesObject.details.name = dataName;
    return pagesObject;
}

function disableElement(key, el) {
    const element = document.getElementById(key);
    element.value = el[key];
    element.disabled = true;
}
