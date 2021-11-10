const storageNamespace = '@dixietileshop';

const getStorageKey = key => `${storageNamespace}:${key}`;

const setValue = (key, value) => localStorage.setItem(getStorageKey(key), value);
const setObject = (key, object) => localStorage.setItem(getStorageKey(key), JSON.stringify(object));

const getValue = key => localStorage.getItem(getStorageKey(key));
const remove = key => localStorage.removeItem(getStorageKey(key));

export default {
    setValue,
    setObject,
    getValue,
    remove,
};
