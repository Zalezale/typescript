//interface 是ts内部机制
interface Named{
    name:string
}
let x:Named
let y = {name:'alice',location:"seattlt"}
x = y
//函数兼容
//1、参数  源函数的参数类型是目标类型的返回类型的父类型
let x1 = (a:number)=>0
let y1 = (b:number,s:string)=>0
y1= x1
x1= y1
//2、返回值  类型系统强制源函数的返回类型是目标类型的返回类型的子类型
let x2 = ()=>({name:'alice'})
let y2 = ()=>({name:'alice',location:'seee'})
x2=y2
y2=x2
//函数参数
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x3: number; y3: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x3 + "," + e.y3));
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
//可选参数和休息参数
//枚举  枚举与数字兼容，数字与枚举兼容。来自不同枚举类型的枚举值被认为是不兼容的
enum Status{Ready,Waiting}
enum Color{Red,Blue,Green}
let status1 = Status.Ready
    status = Color.Green
//类   比较类类型的两个对象时，仅比较实例的成员。静态成员和构造函数不会影响兼容性。
//目标类型包含私有成员，则源类型还必须包含源自同一类的私有成员
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK
//范型
interface Empty<T> {
}
let x4: Empty<number>;
let y4: Empty<string>;

x4 = y4;
interface NotEmpty<T> {
    data: T;
}
let x5: NotEmpty<number>;
let y5: NotEmpty<string>;

x5= y5;  