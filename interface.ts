/**
 * interface
 */
//1、设置值的形状
//2、可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {//false
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({colror: "black"} as SquareConfig);//绕过检查的方法一
//2、只读属性
// interface Point{
//     readonly x:number
// }
// let p1:Point = {x:10}
// p1.x = 5

// let a: number[]=[1,2,3,4]
// let ro:ReadonlyArray<number>=a
// ro[0]=12
// a=ro
// a= ro as number[]//运用类型断言，进行类型转换
// a[0]=11
//3、功能类型
interface SearchFunc{
    (source:string,subString:string):boolean
}
let mySearch:SearchFunc
mySearch = function(s1:string,s2:string){
    return false
}
//4、可转换类型
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {//索引签名数字索引对应的类型必须是字符串对应类型的子类行
    [x: number]: Dog;
    [y: string]: Animal;
}
//5、班级类型
interface ClockInterface{
     currentTime:Date
     setTimeout(d:Date)
}
class Clock implements ClockInterface{
    currentTime:Date
    setTimeout(d:Date){
        this.currentTime = d
    }
    constructor(h:number,m:number){}
}
//6、类的静态和实例方面的区别 ✨✨✨✨✨
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock1 implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
//7、扩展接口
interface Shape {
    color?: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength?: number;
}

let square :Square = {penWidth:100}
let square1 = <Square>{};
square1.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
//8、混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//9、接口扩展类
class Control {
    private state: any;
}
//扩展具有私有或受保护成员的类的接口时，该接口类型只能由该类或其子类实现。
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

//
class Image implements SelectableControl {
    select() { }
}





