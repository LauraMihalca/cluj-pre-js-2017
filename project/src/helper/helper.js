function constructId(title) {
    return title.split(/[ |,|]/).join('');
}

function constructIdFieldset(legend, label) {
    const newLegend = legend.split(/[ |,|]/).join('');
    const newLabel = label.split(/[ |,|]/).join('');
    return `${newLegend}${newLabel}`;
}
