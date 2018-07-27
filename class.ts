/**
 * 类
 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
//1、继承
class People {
    private talk(): void {
        console.log('saying')
    }
}
class Student extends People {
    constructor() {
        super()//必含项
    }
    public walk(): void {
        console.log('walking')
    }
}
let stu1 = new Student()
stu1.walk()
//2、公共、私有和受保护
//(1)默认公开
//(2)private 在ts中该属性只能在父类中使用，子类，实例中不可用，但实际转换为js之后，所有实例是可以访问的
class Animal {
    private title: string = 'ooooo';
    title1: string = 'pppppp'
    constructor(theName: string) {
    this.title = theName;
    }
}
class Rhino extends Animal {
    constructor() { super("Rhino"); }
}
let rh = new Rhino()
//(3)projected 外部访问不了，子类内部，实例方法中可以访问
class Person {
    protected tag: string;
    constructor(tag: string) { this.tag = tag; }
}

class Employee extends Person {
    private department: string;

    constructor(tag: string, department: string) {
        super(tag);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.tag} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
howard.getElevatorPitch()
//3只读修饰符 必须在声明或者构造函数中初始化readonly属性
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name
    }
}
let dad = new Octopus("Man with the 8 strong legs");
class Optopus1{
    constructor(readonly name:string){//参数属性

    }
}
//4、访问器
let passcode = 'secret'
class Menu{
    private _fullname:string
    get fullname():string{
        return this._fullname
    }
    set fullname(newName:string){
        if(passcode&&passcode==='secret'){
            this._fullname=newName
        }else{
            console.log('error')
        }
    }
    
}
let  tudousi = new Menu()
tudousi.fullname = 'suanlatudousi'
console.log(tudousi.fullname)
//5、静态属性   类本身可见，实例不可见
class Grid{
    static title:string='grid'
}
let grid = new Grid()
grid.title
Grid.title
//6、抽象类  
abstract class Water{
    abstract from():string //必须在派生类中实现
}
class haishui extends Water{
    from(){
        return 'sea'
    }
}
//7、先进技术
//（1）构造函数
class Greeter1 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter1();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting= "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
//（2）使用类作为接口
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

