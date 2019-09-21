### 数据类型判断之typeof
typeof可以用来判断==原始数据类型==，如string、undefined、number、boolean这四个标准的ES5原始数据类型以及==函数类型:==

```
typeof 'foobar' // string 可以判断
typeof 99 // number 可以判断
typeof true // boolean 可以判断
typeof undefined // undefined 可以判断
typeof function (){} // function 可以判断
typeof null // object 很明显typeof没法判断null
typeof new Object() // object 没法判断
// 另外，ES6的Symbol类型数据是可以判断的
typeof Symbol() // symbol 可以判断

// 所以，总结一下，typeof一共可以判断六种Javascript数据类型
string number boolean undefined function symbol  //（都是小写）
```


### 数据类型判断之instanceof
关于instanceof操作符，如：foo instanceof bar; 其实它是通过原型链遍历的方法，看foo的原型链中是否包含了bar的prototype属性（这里bar肯定要是一个构造函数，如Array或者Object等）

### 模拟实现一个instanceof函数

```
function instanceof2(foo, bar) {
    var left = Object.getPrototypeOf(foo);
    var right = bar.prototype;
    
    // 在循环中一级一级朝上遍历foo的原型链
    while(left != null) {
        if (left === right) {
            return true
        }
        left = Object.getPrototypeOf(left);
    }
    
    return false;
}

instanceof2([], Object) // true
instanceof2({}, Object) // true
instanceof2(3, Number); // true
instanceof2('foobar', Number); // false
```

### 数据类型判断之Object.prototype.toString
###### ① 看看toString方法返回什么

```
数值：返回[object Number]。
字符串：返回[object String]。
布尔值：返回[object Boolean]。
undefined：返回[object Undefined]。
null：返回[object Null]。
数组：返回[object Array]。
arguments 对象：返回[object Arguments]。
函数：返回[object Function]。
Error 对象：返回[object Error]。
Date 对象：返回[object Date]。
RegExp 对象：返回[object RegExp]。
其他对象：返回[object Object]。
```

###### ② 为什么利用toString方法可以判断数据类型
toString方法返回的值都是类似"[object Number]"的字符串

==同一种数据类型toString方法返回的值是固定的==

toString方法是定义在Object对象原型上的方法，虽然部分数据类型如数组和Date已经改写了这个方法，并且使用字面量定义的原始数据类型是不存在这个方法的，但是都可以利用Object.prototype.toString函数的call方法去调用

下面是一些实例

```
Object.prototype.toString.call(99) // "[object Number]"
Object.prototype.toString.call('foobar') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call(Math) // "[object Math]" 感觉没必要去判断这个
Object.prototype.toString.call(function(){}) // "[object Function]"
Object.prototype.toString.call(/foobar/g) // "[object RegExp]"
Object.prototype.toString.call(new Date()) // "[object Date]"
Object.prototype.toString.call(new Error()) // "[object Error]"
Object.prototype.toString.call(Symbol()) // "[object Symbol]"
// 另外可以顺便了解一下，它可以识别Arguments对象，但感觉也没必要判断这个
(function(){return Object.prototype.toString.call(arguments)}()) // "[object Arguments]"
```

###### ③ 利用toString方法来判断数据类型

```
// Array.isArray是很常用的方法，利用toString可以非常轻松可以实现一个它的polyfill

function isArray2(foobar) {
    return Object.prototype.toString.call(foobar) === '[object Array]';
}

// 判断变量是否是字符串
function isNumber(foobar) {
    return Object.prototype.toString.call(foobar) === '[object Number]';
}
isNumber(99) // true
isNumber(new Number(99)) // true
typeof new Number(99) === 'object' // true
typeof new Number(99) === 'number' // false 需要注意二者的区别,不过正常情况下是不会用构造函数去生成数字等原始数据的

```


### 用toString方法封装一些工具类方法
基于toString方法的这些特性，可以将一些判断数据类型的方法封装到一个工具类对象中，假设我们现在有Box这个全局对象

```
(function(){
   var array = ['Null','Undefined','Object','Array','String','Number', 'Boolean','Function','RegExp','Date']; 

    array.forEach(function(item) {
        Box['is' + item] = function(target) {
            var s = Object.prototype.toString.call(target);
            return s.match(/\[object (.*?)\]/)[1].toLowerCase() === item.toLowerCase();
        }
    });
 
}())

Box.isFunction(function(){}) // true
Box.isFunction(99) // false
Box.isBoolean(true) // true
Box.isDate(new Date()) // true
Box.isRegExp(/foobar/g); // true
Box.isUndefined(undefined); // true
Box.isNull(null); // true
Box.isNull(undefined) // false
Box.isArray([]) // true
Box.isArray(99) // false
Box.isObject({}) // true
```


