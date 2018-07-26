/**
 * variable declaration  变量声明
 */
//1、块由外而内可见，由内而外不可见
// if (true) {
//     let x: string = 'zale'
// }
// let y: string = x + `is a name .`
// //2、暂时性死区
// x1++
// let x1: number = 10
// //3、同一块内不允许重复声明
// let x2: string = 'zale'
// var x2 = 'kate'
// //4、块范围变量捕获
// for (let i: number = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 5);
// }
//5、const 值不可修改
/**
 * 解构
 */
//1、数组解构
var x3 = [1, 'qqq', true];
var first = x3[0], second = x3[1], third = x3[2];
//2、对象解构
var o1 = {
    a1: 'zale',
    b1: 'boo',
    c1: 'coo'
};
var a1 = o1.a1, b1 = o1.b1, c1 = o1.c1;
//物业重命名
var newName1 = o1.a1, newName2 = o1.b1;
console.log(newName1 + newName2);
