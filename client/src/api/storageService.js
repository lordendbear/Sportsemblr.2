const KEY = 'auth';

export default class StorageService {
    static _getLocalStorage() {
        const localStorage = this._parseJson(window.localStorage[KEY]);

        return localStorage;
    }

    static getKey(key) {
        const localStorage = this._getLocalStorage();

        if(!localStorage) {
            return null;
        }

        return localStorage[key];
    }

    static setKey(key, value) {
        const localStorage = this._getLocalStorage();

        if(!localStorage) {
            return null;
        }

        window.localStorage.setItem(key, value);
    }

    static _parseJson(json) {
        if (!json) {
            return null;
        }

        try {
            return JSON.parse(json);
        } catch (e) {
            return null;
        }
    }
}
