/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 英文字符串依序转驼峰，处理过程中遇见非英文字母字符，全部当做空格处理，其余依序拼装
 * @example: _.camelCase('Foo Bar'); => 'fooBar'
 * @example: _.camelCase('--foo-bar--'); => 'fooBar'
 * @example:  _.camelCase('FOO BAR QI#ZH');  => 'fooBarQiZh'
*/
function camelCase(string) {
    let error,
        result = [],
        stringArray = string.split(""),
        isLowerCase,
        nextUpperCase = false,
        isCase,
        start = string.search(/([a-zA-Z])/) + 1,
        regCase = /^[a-zA-Z]$/,
        regLowerCase = /^[a-z]$/;

    if (!string) {
        error = "camelCase调用时参数不能为空";
    }

    if ((start - 1) >= 0) {
        // 推入首个字母，首个字母必须小写
        result.push(stringArray[start - 1].toLowerCase());

        for (let i = start; i < stringArray.length; i++) {
            let singleString = stringArray[i];
            let thisUpperCase = nextUpperCase;
            isCase = regCase.test(singleString);
            nextUpperCase = false;

            if (isCase) {
                isLowerCase = regLowerCase.test(singleString);
                if (thisUpperCase === false) {
                    result.push(singleString.toLowerCase());
                } else {
                    result.push(singleString.toUpperCase());
                }
            } else {
                nextUpperCase = true;
            }
        }
    }

    if (error) {
        return new Error(error);
    } else if (result && result.length) {
        return result.join("");
    }

    return string;
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断某个字符串是否以某特殊字符结尾,尾部空格会被忽略
 * @example: endsWith("foobar", "bar") // true   endsWith("foobar", "foo") // false
*/
function endsWith(string, match) {
    if (!string || !match) {
        return new Error("endsWith函数调用时参数不能为空");
    }

    if (string === match) {
        return true;
    }

    let reg = new RegExp(match.replace(/\s*$/g, "") + "$");

    return reg.test(string.replace(/\s*$/g, ""));
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断某个字符串是否以某特殊字符开头,头部空格会被忽略
 * @example: startsWith("foobar", "fo") // true startsWith("foobar", "v") // false
 */
function startsWith(string, match) {
    if (!string || !match) {
        return new Error("startsWith函数调用时参数不能为空");
    }

    if (string === match) {
        return true;
    }

    let reg = new RegExp("^" + match.replace(/^\s*/g, ""));

    return reg.test(string.replace(/^\s*/g, ""));
}

export {
    camelCase,
    endsWith,
    startsWith
}