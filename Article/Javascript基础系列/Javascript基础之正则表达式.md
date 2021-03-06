﻿## 写在前面 这篇文章全都是实例分析，有关所有文章中用到的正则表达式知识，请参阅：

30分钟入门正则表达式
这篇文章关于正则的知识介绍的非常全面，值得多看几遍

正则表达式能做什么

① 获取两个指定字符串之间的特殊字符

假设有一个很长的字符串，现在要取出两个特殊字符之间的所有字符，以下表达式可以实现

// (1) 实例一 获取 spread 和 to 之间的所有字符
var str = 'The manufacturers spread the idea of the products to attract more people to purchase';
var reg1 = /(?<=spread).+(?=to)/; // 贪婪模式

str.match(reg1)
// [" the idea of the products to attract more people ", index: 24, input: "The manufacturers spread the idea of the products to attract more people to purchase", groups: undefined]

var reg2 = /(?<=spread).+?(?=to)/; // 懒惰模式

str.match(reg2)
// [" the idea of the products ", index: 24, input: "The manufacturers spread the idea of the products to attract more people to purchase", groups: undefined]

// (2) 获取两个指定字符串之间的特殊字符之实例二
这个正则主要涉及到了三种知识：

贪婪与懒惰
(?=exp) 零宽度正预测先行断言，它断言自身出现的位置的后面能匹配表达式exp
(?<=exp) 零宽度正回顾后发断言，它断言自身出现的位置的前面能匹配表达式exp
使用这两种方式截取到的字符串两边都是有空白符的，如果不需要可以手动去掉

下面就介绍一种去掉字符串两边空白字符的正则：

② 去除字符串两边的空白字符

就以上面第一个实例的结果做样例吧

// 先在String的原型上挂载一个trim函数

String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

var string1 = ' the idea of the products to attract more people '; // 上面第一个实例的结果（贪婪模式下）
var string2 = ' the idea of the products '; // 上面第一个实例的结果（非贪婪模式下）

string1.trim(); // 'the idea of the products to attract more people'
string2.trim(); // 'the idea of the products'
③ 判断字符串中是否有某个单词以特殊字符结尾

还是以上面例子的最终结果为数据源

对于 'the idea of the products to attract more people' 这个字符串，如果想判断这个字符串中是否有单词以dea结尾，以下正则可以判断：

var string = 'the idea of the products to attract more people';
var reg = /\b.*(?=dea\b)/;
var reg1 = /\b.*(?=ade\b)/;

reg.test('the idea of the products to attract more people'); // true
reg1.test('the idea of the products to attract more people'); // false

// 我们知道，string中有idea这个单词，所以结果为true,但是没有以dea结尾的单词，所以reg1的test函数运行结果为false
④ 过滤js文件和exe文件

如果要过滤js文件和exe文件，可以建立这样一个表达式，字符串只要是以.js或者是.exe作为后缀，就不匹配，其他任意条件都匹配，如下：

var reg = /^[^.]+$|\.(?!(js|exe)$)(?!.*\.(js|exe)$)|^.{0}$/;

// 看看几个例子
'foo.js'.search(reg); // -1 相当于test方法的false
'bar.exe'.search(reg); // -1 相当于test方法的false
'bar.exee'.search(reg);  // 3 相当于test方法的true
'js.foo'.search(reg); // 2 相当于test方法的true
'js.foo'.search(reg); // 2 相当于test方法的true
'foobar'.search(reg); // 0 相当于test方法的true
''.search(reg); // 0 相当于test方法的true
'foo.js.js'.search(reg); // -1 相当于test方法的false
'foo.js.jss'.search(reg); // 3 相当于test方法的true
'.js.'.search(reg); // 0 相当于test方法的true
'sj.jsj'.search(reg); // 2 相当于test方法的true

// 为了方便解析，将表达式拆分为三个大部分，第二部分中又分为三个小部分

// (1.0) ^[^.]+$
// (2.0) \.(?!(js|exe)$)(?!.*\.(js|exe)$)
// (2.1) \.
// (2.2) (?!(js|exe)$)
// (2.3) (?!.*\.(js|exe)$)
// (3.0) ^.{0}$
这个表达式需要分开来看：

第一步：先判断字符串中是否含有.符号，没有则直接匹配，这是【1.0】部分起的作用

第二步：这一步我们认为表达式肯定具有.符号，这时先匹配.符号，这是【2.1】部分起的作用

第三步：如果.符号后面紧跟着exe或者js,并且在js和exe后没有任何字符，也就是说js或exe是尾部,这时它就是exe文件或者是js文件，我们肯定是不能匹配的，这是【2.2】部分起的作用

第四步：如果存在多个.符号，我们应该以最后一个.符号为准，这是【2.3】部分起的作用

第五步：上面的步骤全部写完还是无法处理空字符串情况的，需要单独做处理，这是【3.0】部分起的作用

注意：这里用来判断一个字符串中是否不含有指定类型的字符（非指定字符，只能是同一种类型）的技巧很实用，如下判断字符串中是否不存在数字

var str = 'foo3bar';
var str1 = 'foobar';
/^[^\d]+$/.test(str);  // false
/^[^\d]+$/.test(str1);  // true
⑤ 判断字符串是否包含指定字符串

这种判断应该算是经常用到的功能了，例如判断url地址是否包含特定字符串等，下面看一个实例：

// 需求 1：判断下面url地址中是否包含resizeFlag

var foo = "http://localhost:8002/Home/Login#durationmgr/dailyTask/workPanel?resizeFlag=false";
var bar = "http://localhost:8002/Home/Login#durationmgr/dailyTask/workPanel";

var reg = /resizeFlag/; // 这真是简单有效，但是它只能用于最简单的匹配

reg.test(foo); // true
reg.test(bar); // false

// 下面看另一种方式
var reg1 = /^(?=.*?resizeFlag).*$/; // 正向前瞻，匹配包含resizeFlag的字符串
var reg2 = /^(?!.*?resizeFlag).*$/; // 反向前瞻，匹配不包含resizeFlag的字符串

reg1.test(foo); // true
reg1.test(bar); // false
reg2.test(foo); // false
reg2.test(bar); // true

// 需求 2：判断下面url地址中是否包含resizeFlag，如果有，则取出从#号到?号之间的任意字符

var foo = "http://localhost:8002/Home/Login#durationmgr/dailyTask/workPanel?resizeFlag=false";
var bar = "http://localhost:8002/Home/Login#durationmgr/dailyTask/workPanel?flight=1";

// 解决方式 1, 把判断和取出特定字符分开去做
function getUrl(url, flagString) {
    if (!url || !flagString) {
        return new Error('getUrl need a url');
    }
    
    var urlT = url,
        flagStringT = flagString,
        reg = new RegExp(flagStringT),
        reg1 = /^.*#(.*)\?{1}.*$/;
        
    if (!reg.test(urlT)) {
        return;
    }
    
    return reg1.exec(urlT)[1];
}

getUrl(foo, 'resizeFlag') // "durationmgr/dailyTask/workPanel"
getUrl(bar, 'resizeFlag') // undefined

// 解决方式 2, 把判断和取出特定字符放在一个表达式里
var reg2 = /^.*#(.*)\?{1}(?=.*?resizeFlag).*$/;

reg2.exec(foo)[1]; // "durationmgr/dailyTask/workPanel"
reg2.exec(bar) // null

// 显然解决方式 2代码就简洁很多了，这就是正向前瞻的威力
⑥ 校验密码强度

校验密码强度在表单验证时非常实用，密码强度的验证可以完全交给前端去做，下面看一个常见校验密码强度的实例：

// 需求： 密码必须包含一个大写字母、一个小写字母、一个数字和一个特殊字符，长度要求为8到16位，且密码只能由这些字符组成

var reg = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).{8,16}$/;
var reg1 = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? \(\)]).*$/;
var reg2 = /(?=^.{8,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? \(\)])/;

// 测试reg
reg.test('123abcDEF$'); // true
reg.test('123abcccc$'); // false 不含大写字母
reg.test('123DDDDDD$'); // false 不含小写字母
reg.test('ddddDDDfff$'); // false 不含数字
reg.test('ddddDDDfffdd12'); // false 不含特殊字符
reg.test('1dDDff$'); // false 长度不足8位
reg.test('1ddDDff$1234567891234'); // false 长度超过16位

// 测试reg1
reg1.test('123abcDEF$'); // true
reg1.test('123abcccc$'); // false 不含大写字母
reg1.test('123DDDDDD$'); // false 不含小写字母
reg1.test('ddddDDDfff$'); // false 不含数字
reg1.test('ddddDDDfffdd12'); // false 不含特殊字符
reg1.test('1dDDff$'); // false 长度不足8位
reg1.test('1ddDDff$1234567891234'); // false 长度超过16位

// reg2效果与上面一致
这三种表达式的关键都在于正向前瞻的运用，区别只是reg1对于判断字符串长度也使用正向前瞻，而reg对于字符串长度的判断则是普通模式

上述三种表达式模式适用于判断字符串同时满足多种条件,类似于与(&)的操作

值得思考的两个问题： (1) reg和reg1的区别？ (2) reg1和reg2的区别？

⑦ 匹配日期格式如 "2019-01-02"，"2019/02/03"，"2019.03.04"

这种日期格式较固定，数字{4位} 连字符 数字{1至2位} 连字符 数字{1至两位}，表达式写起来相对简单，按照顺序来写即可

// 直接上实例
var reg = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;

reg.test('2019-01-02'); // true
reg.test('2019-1-02'); // true
reg.test('2019-01-2'); // true
reg.test('201-01-02'); // false 年份不足四位
reg.test('201九-01-02'); // false 第四位不是数字

// 看一下这个表达式的bug
reg.test('2019-00-01'); // true 月份可以为0
reg.test('2019-01-00'); // true 日可以为0
reg.test('0000-01-02'); // true 年可以为0

// 改进版本,不过意义不大，还是没限制月份的大小和日期大小
var reg1 = /^(?!^0000.*$)(?!^.{5}00.*$)(?!^.*00$)\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
reg1.test('2019-01-02'); // true
reg1.test('2019-1-02'); // true
reg1.test('2019-01-2'); // true
reg1.test('2019-00-01'); // false
reg1.test('2019-01-00'); // false
reg1.test('0000-01-02'); // false

// 最终版本, 考虑到了所有情况,但是这里限制死了链接符为-,并且月和日的格式为两位数(01,02,03,04,....)
var reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;

reg.test('2019-01-02') // true
reg.test('2019-02-29') // false 2月没有29号
reg.test('2019-02-28') // true
reg.test('2019-13-02') // false 没有13月
reg.test('2019-08-32'); // false 没有32号
reg.test('2019-08-31'); // true
⑧ 实现模板字符串替换函数

模板字符串替换是很常见的，ejs模板引擎、Vue的模板字符串替换、ES6的模板字符串替换，在这里我们实现一个基本的模板字符串替换函数

var reg = 'I am a {job}, Do you like my {book} and {job}',
    data = {
       job: 'teacher',
       book: 'Javascript高级编程',
    };

function renderTpl(reg, data) {
    if (!reg) {
        return new Error('reg is need');
    }

    var arr = reg.match(/\{.+?\}/g);

    if (arr && arr.length <= 0) {
        return;
    }

    var arr = arr.map(function(item) {
        return item.replace(/\{|\}/g, '');
    })

    for (var i = 0, length = arr.length; i < length; i ++) {
        var item = arr[i];
        var regExpr = '/\{' + item + '\}/g';
        reg = reg.replace(eval(regExpr), data[item]);
    }

    return reg;
}

renderTpl(reg, data); // "I am a teacher, Do you like my Javascript高级编程 and teacher"
⑨ 实现千分位标注

实现千分位标注的需求常见于金融交易软件，对于大额数字的展示非常有效

    function addSeparator(str, sep) {
        if (!str) {
            return '';
        }
        var strT = str + '',
            sepT = sep || ',',
            arr = strT.split('.'),
            re = /(\d+)(\d{3})/;

        var integer = arr[0],
            decimal = arr.length <= 1 ? "" : '.' + arr[1];

        while (re.test(integer)) {
            integer = integer.replace(re, "$1" + sepT + "$2")
        }

        return integer + decimal;
    }

    console.log(addSeparator(-1987654321.23)); // -1,987,654,321.23
这种需求也会带来一种困扰，因为实际展示的不再是数字了

如果页面中需要再次对这个数字进行取值运算，取到的并不是我们想要的值，因此在实现千分位标注之前就可以利用html标签的属性把原始值存储起来

如:

<span data-amount='-1987654321.23'>-1,987,654,321.23</span>
⑩ 循环使用exec方法

循环使用exec方法实现与match方法同样的“匹配所有”的功能，并且获得的信息更全面

var x = "a.xxx.com b.xxx.com c.xxx.com";
var reg = /(.*?)\.(?:.*?)\.com\s?/g; // 注意点1：这里必须有全局修饰符g

var arr = [], arr2 = [];

while (item = reg.exec(x)) { // 注意点2: 这里可使用exec执行返回的结果作为循环结束的条件
    arr2.push(item);
    arr.push(item[1]);
}

console.log(arr);
// ["a", "b", "c"]

console.log(arr2);
<!--
["a.xxx.com ", "a", index: 0, input: "a.xxx.com b.xxx.com c.xxx.com", groups: undefined]
["b.xxx.com ", "b", index: 10, input: "a.xxx.com b.xxx.com c.xxx.com", groups: undefined]
["c.xxx.com", "c", index: 20, input: "a.xxx.com b.xxx.com c.xxx.com", groups: undefined]
-->

console.log(x.match(reg));
// ["a.xxx.com", " b.xxx.com", " c.xxx.com"]

var reg1 = /([a-zA-Z])(?=\.(?:[a-zA-Z]+)\.com\s?)/g;

console.log(x.match(reg1));
// ["a", "b", "c"]
