// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

// const qs = require('qs')

// console.log(qs.stringify({
//     name: 'sdad哈哈哈',
//     age: 21,
//     url: 'https://blog.csdn.net/sansan_7957/article/details/82227040',
//     flag: false
// }))

// // console.log(qs.parse('?a=b&c=d', { ignoreQueryPrefix: true }))
// // console.log(qs.parse('a=foo&c=bar&e=啦啦'))
// // console.log(qs.parse('name=sdad%E5%93%88%E5%93%88%E5%93%88&age=21&url=https%3A%2F%2Fblog.csdn.net%2Fsansan_7957%2Farticle%2Fdetails%2F82227040&flag=false'))

// console.log(qs.parse('a=b;c=d', { delimiter: ';' }))
// console.log(qs.parse('foo[bar]=baz'))

// 浅拷贝
// function copy(obj) {
//     if (typeof obj !== 'object') return

//     const newObj = obj instanceof Array ? [] : {}
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = obj[key]
//         }
//     }

//     return newObj
// }

// function copy(obj) {
//     if (typeof obj !== 'object') return

//     const newObj = obj instanceof Array ? [] : {}
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = typeof obj[key] === 'object' ? copy(obj[key]) : obj[key]
//         }
//     }

//     return newObj
// }

// const obj = {
//     name: 'hadisi',
//     age: 20,
//     children: [
//         {
//             name: 'andi',
//             age: 1,
//             children: []
//         },
//         {
//             name: 'kate',
//             age: 2,
//             children: []
//         }
//     ]
// }

// console.log(copy(obj))

// const a = copy(obj)

// a.children[0].name = 'aaaaaaa'

// console.log(obj)
// console.log(a)

// const arr = [1, [2, [3, 4]]];

// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }

//     return arr
// }

// console.log(flatten(arr))

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => {
//     console.log(element)
//     return element % 2 === 0;
// }

// console.log(array.some(even));
// expected output: true

// const arr = [1,3,5]

// function hasEven(arr) {
//     return arr.some(item => item % 2 === 0)
// }

// console.log(hasEven(arr))

// const arr = [1,2,3,4,5]

// function isStringOfArr(arr) {
//     return arr.some(item => Object.prototype.toString.call(item) === '[object String]')
// }

// console.log(isStringOfArr(arr))

// const arr = ['1','2','3','4',5]

// function isStringOfArr(arr) {
//     return arr.every(item => Object.prototype.toString.call(item) === '[object String]')
// }

// console.log(isStringOfArr(arr))

// const arr = [1,2,3,4,5]

// console.log(arr.findIndex((item) => item === 4))
const animals = ['1', '2', '3', '4', '5', '6', '7'];

console.log(animals.slice(-3))
