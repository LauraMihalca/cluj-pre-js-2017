function constructId(title) {
    return title.split(/[ |,|]/).join('');
}

function constructIdFieldset(legend, label) {
    return `${constructId(legend)}${constructId(label)}`;
}

function disableElement(key, el) {
    const element = document.getElementById(key);
    element.value = el[key];
    element.disabled = true;
}

const getComponent = function (page) {
    return ComponentConstructor(page);
};

const render = function (component) {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = component.markup;
};

const setupEvents = function (component, redirectToFunction) {
    component.init(redirectToFunction);
};

const destroy = function (component) {
    component.destroy();
};

const populate = function (component, dataName) {
    component.populate(dataName);
};
