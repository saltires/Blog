// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return `Hello,${person.firstName}${person.lastName}`
// }

// let user = new Student("Jane", "M.", "User");

// console.log(user.firstName);
// console.log(user.middleInitial);
// console.log(user.lastName);

// document.body.innerHTML = greeter(user);


/** 1 基本的数据类型定义 ******************************************/

// let str:string = '123';

// console.log(str);

// // str = 123;  Type 'number' is not assignable to type 'string'

// // console.log(str);

// let boo:boolean = true;

// console.log(boo);

// let arr:number[] = [1,2,3];
// let arr1:Array<number> = [1,2,3];

// enum Color1 {Red = 1, Green = 1, Blue = '3'}

// let c1:Color1 = Color1.Green;

// let c2:string = Color1[1]

// console.log(c2);

// let nam:any = '123'

// console.log(nam);

// nam = 100;

// console.log(nam);

// let arr:any[] = [1, 're', true];

// console.log(arr);

// arr = [5, 'true', false, { name: 1 }];

// console.log(arr);

// 指定返回的数据类型
// function warnUser(): boolean {
//     return true;
// }

// // 指定该函数不返回任何数据
// function warnUser1(): void {
//     console.log(1);
// }

// console.log(warnUser());

// console.log(warnUser1());

// class Animal {
//     private animalName: string;
//     constructor(public name:string) {
//         this.animalName = name + '.MS';
//     }

//     sayHello() {
//         console.log(this.animalName);
//     }
// }

// const qishi = new Animal('zhanshi');

// console.log(qishi.name);

// class cat extends Animal {
//     sayHello() {
//         console.log(this.animalName);
//     }
// }

// interface ICar {
//     color:string;
// }

// class Bus implements Square {
//     color:string;
//     penWidth: number;
//     sideLength: number;
//     constructor() {
//         this.color = 'blue';
//         this.penWidth = 123;
//         this.sideLength = 100;
//     }
// }

// const bus = new Bus();

// console.log();

// 接口可以继承

// interface Shape {
//     color: string;
// }

// interface PenStroke {
//     penWidth: number;
// }

// interface Square extends Shape,PenStroke {
//     sideLength: number;
// }

// 类可以实现接口，

// 接口上的属性可实现也可以不实现

// interface Color {
//     color: string;
//     isgreed?: boolean;
// }

// class foo implements Color{
//     color: string;
//     isgreed: boolean;
//     constructor() {
//         this.color = 'qishi';
//         this.isgreed = false;
//     }
// }

// const cac:{foo:string,bar:number, hh?:string} = {foo: '123', bar:123}

// 限制回调函数类型
// function foo(callback:(a:number, b:number) => number) {
//     callback(1, 10);
// }

// foo(function(foo,bar) {
//     console.log(foo + bar);
//     return foo + bar;
// })

// 字面量类型（或类型）
// const state: 'success' | 'failed' | 'info' = 'success'

// 或类型（数据）
// const foo:number | string = 100

// 使用type关键词
// type hash = string | number

// const foo:hash = 'qishi'
// const foo1:hash = 123

// mixed类型
// function foo(bar:any){
//     console.log(bar);
// }

// foo(123)

const arr:symbol = Symbol('das')

export {}