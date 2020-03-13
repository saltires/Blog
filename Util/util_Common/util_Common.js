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

export {
    type
}