
// 模拟实现 call 函数
Function.prototype.call2 = function(arg, ...args) {
    const context = arg || window

    context._fn_call = this

    const result = context._fn_call(...args)

    delete context._fn_call

    return result
}

// 模拟实现 apply 函数
Function.prototype.apply2 = function(arg, args = []) {
    const context = arg || window

    context._fn_apply = this

    const result = context._fn_apply(...args)

    delete context._fn_apply

    return result
}

// 模拟实现 bind 方法
Function.prototype.bind2 = function (arg, ...args) {
    const context = arg || window

    context._fn_bind = this

    return function (...argsInner) {
        const result = context._fn_bind(...args.concat(argsInner))

        delete context._fn_apply

        return result
    }
}

// 实现 map 方法
Array.prototype.map2 = function (fn) {
    const result = []

    for (let item of this) {
        result.push(fn(item))
    }

    return result
}

// 实现 filter 方法
Array.prototype.filter2 = function (fn) {
    const result = []

    for (let item of this) {
        if (fn(item)) {
            result.push(item)
        } 
    }

    return result
}

// 实现 once 函数
function once (fn) {
    let flag = false

    return function (...args) {
        if (!flag) {
            flag = true
            return fn(...args)
        }

        return
    }
}

// 实现组合函数 flowRight
function flowRight (...args) {
    return function (initialValue) {
        args.reverse().reduce((acc, cur) => cur(acc), initialValue)
    }
}

