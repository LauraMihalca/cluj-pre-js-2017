const getRows = function () {
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
};
