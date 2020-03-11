import {
         camelCase
       }
       from "./util_String/util_String.js"


class Util {
    constructor() {
        this._version = "Util function of version [0.01]";
    }
    // 返回Util工具的版本
    version() {
        return this._version;
    }

    camelCase(string) {
        return camelCase(string);
    }

}

export {
    Util
}