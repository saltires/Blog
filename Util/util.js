import {
    camelCase,
    endsWith,
    startsWith
} from "./util_String/util_String.js"

import {
    hasClass
} from "./util_String/util_Dom.js"


class Util {
    constructor() {
        this._version = "Util function of version [0.01]";
    }
    // 返回Util工具的版本
    version() {
        return this._version;
    }
    // 字符串转驼峰
    camelCase(string) {
        return camelCase(string);
    }
    // 判断字符串是否以某特殊字符结尾
    endsWith(string, match) {
        return endsWith(string, match);
    }
    // 判断字符串是否以某特殊字符开头
    startsWith(string, match) {
        return startsWith(string, match);
    }
    // 判断元素是否含有某个class
    hasClass(ele, defClass) {
        return hasClass(ele, defClass);
    }

}

export {
    Util
}