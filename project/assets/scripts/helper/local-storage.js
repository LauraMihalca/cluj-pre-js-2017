const localStorageGetter = function (key) {
    return JSON.parse(localStorage.getItem(key));
};

const localStorageSetter = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
