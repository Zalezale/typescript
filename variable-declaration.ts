/**
 * variable declaration  变量声明
 */
//1、块由外而内可见，由内而外不可见
if(true){
if (true) {
    let x: string = 'zale'
}
let y: string = x + `is a name .`
//2、暂时性死区
x1++
let x1: number = 10
//3、同一块内不允许重复声明
let x2: string = 'zale'
var x2 = 'kate'
//4、块范围变量捕获
for (let i: number = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 5);
}
//5、const 值不可修改
/**
 * 解构
 */
//1、数组解构
let x3: any[] = [1, 'qqq', true]
let [first, second, third] = x3
//2、对象解构(输出变量为属性名值)
let o = {
    a1: 'zale',
    b1: 'boo',
    c1: 'coo'
}
let {a1,b1,c1} = o;
let {a1:newName1,b1:newName2} = o;
//3、物业重命名(对属性重命名)
let o1 = {
    a2: 'zale',
    b2: 'boo',
    c2: 'coo'
}
let { a2, b2 }: { a2: string, b2: string } = o1;

//4、默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
function test1({x=1,y=2}={x:11,y:12}):void{

}
//5、传播 属性覆盖
let obj1 = {name:'zale'}
let obj2 = {name:'kate',age:11}
let obj3 = {...obj1,...obj2}
}
