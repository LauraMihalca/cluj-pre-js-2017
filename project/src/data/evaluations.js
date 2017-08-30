const getRows = function () {
    const evaluationsArray = JSON.parse(localStorage.getItem('evaluationsArray'));
    const finalArray = evaluationsArray.map((element) => {
        const userObj = {};
        userObj.name = element.inputData.candidate;
        userObj.technology = 'Javascript';
        userObj.level = element.technicalLevel;
        return userObj;
    });

    return finalArray;
};

getHeadings = function () {
    return ['Nume', 'Tehnologie', 'Nivel', ''];
};
