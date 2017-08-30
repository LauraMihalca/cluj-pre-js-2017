function constructId(title) {
    return title.split(/[ |,|]/).join('');
}

function constructIdFieldset(legend, label) {
    return `${constructId(legend)}${constructId(label)}`;
}
