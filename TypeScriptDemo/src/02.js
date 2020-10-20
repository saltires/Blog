// const arr:number[] = [1];
// const foo:object = {}
// function sum(...args) {
//     // 这里需要确保args中的每个参数都是数字类型，否则程序运行结果不会符合预期
//     return args.reduce(function(prev, cur){
//         return prev + cur;
//     }, 0)
// }
// console.log(sum(1,2,3,4,'5'));
// function sum1(...args:number[]) {
//     // 从语法上限制了args的类型只能是数字类型的数组
//     return args.reduce(function(prev, cur){
//         return prev + cur;
//     }, 0)
// }
// console.log(sum(1,2,3,4,5));
// export {}
// enum PostStatus {
//     success = 0,
//     info = 1,
//     failed = 2
// }
// const post = {
//     title: 'Hello TypeScript',
//     content: 'TypeScript',
//     status: PostStatus.success
// }
// console.log(post);
// enum PostStatus {
//     success,
//     failed,
//     info
// }
// const post = {
//     title: 'hash',
//     status: PostStatus.failed
// }
// console.log(post);
// 隐式类型推断
// let a = 100
// a = 'str'
// const nums = [110,120,-2,-9]
// const res = nums.find(i => i > 0)
// const square = res * res
// console.log(square);
// interface Post {
//     title: string,
//     href: string
// }
// function printPost(post: Post) {
//     console.log(post.href);
//     console.log(post.title);
// }
// printPost({
//     title: 'hh',
//     href: 'dasda'
// })
// 可选成员和只读成员
// interface Foo {
//     title: string,
//     readonly subtitle: string,
//     index?: number
// }
// function prinitFoo(foo: Foo) {
//     foo.title = 'aa';
//     console.log(foo.index);
// }
// prinitFoo({
//     title: 'aa',
//     subtitle: 'b',
//     index: 5,
// })
// prinitFoo({
//     title: 'aa',
//     subtitle: 'b',
// })
// 用于缓存对象的接口
// interface Caches {
//     [prop: string]: string
// }
// const cache: Caches = {}
// cache.foo = 'dd'
// cache.bar = 'hh'
// 类在TypeScript中的基本使用
var Hell = /** @class */ (function () {
    function Hell(title, num) {
        this.title = title;
        this.num = num;
    }
    Hell.prototype.say = function (time) {
        return time + "ddd";
    };
    return Hell;
}());
