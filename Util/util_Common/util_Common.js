/**
 * @author jxye
 * @date 2020/3/13
 * @Description: 判断数据类型
 * @example: type.isBoolean(true) // true   type.isBoolean("true") // false
*/
let type = function (o) {
    return Object.prototype.toString.call(o).match(/\[object\s(.*?)\]/)[1].toLowerCase();
};

let enumOfType = ['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
];

enumOfType.forEach(function (t) {
    type["is" + t] = function (params) {
        return type(params) === t.toLowerCase();
    }
});

/**
 * @author jxye
 * @date 2020/3/18
 * @Description: 防止函数被频繁触发，设置一个间隔时间，如果间隔时间内用户又一次触发，认为触发无效，并且重新设置间隔时间，这就是常说的防抖
 * @example: debounce(function(){console.log(this);}, 300)
*/

function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.call(context, args);
        }, delay)
    }
}

export {
    type
}