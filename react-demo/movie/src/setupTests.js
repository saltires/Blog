// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

const qs = require('qs')

console.log(qs.stringify({
    name: 'sdad哈哈哈',
    age: 21,
    url: 'https://blog.csdn.net/sansan_7957/article/details/82227040',
    flag: false
}))

// console.log(qs.parse('?a=b&c=d', { ignoreQueryPrefix: true }))
// console.log(qs.parse('a=foo&c=bar&e=啦啦'))
// console.log(qs.parse('name=sdad%E5%93%88%E5%93%88%E5%93%88&age=21&url=https%3A%2F%2Fblog.csdn.net%2Fsansan_7957%2Farticle%2Fdetails%2F82227040&flag=false'))

console.log(qs.parse('a=b;c=d', { delimiter: ';' }))
console.log(qs.parse('foo[bar]=baz'))