//交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<T & U>result)[id] = (<T & U>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<T&U>result)[id] = (<T&U>second)[id];
        }
    }
    return result;
}

class Person5{
    name:string
    constructor(name:string){
       this.name = name
    }
    say(){
        return 'hello'
    }
}

class Car{
    value:number
    constructor(value:number){
       this.value = value
    }
}

function isFish(pet: Person5 | Car ){
    return (<Person5>pet).say !== undefined;
}
isFish(new Car(99))
//typeof 护卫队  必须是"number"，"string"，"boolean"，或"symbol"
typeof '未知参数' === 'string' 
//可空类型  该--strictNullChecks标志修复了这个问题：当你声明一个变量时，它不会自动包含null或undefined
let a = 'dasfadf';
    a = null
//手动限制空没啥用哇
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
      }
      name = name || "Bob";
      return postfix("great");
    }
    
    function fixed(name: string | null): string {
      function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
      }
      name = name || "Bob";
      return postfix("great");
    }
    //类型别名
    type AAA<T> = {value:T}
    type BBB = number
    let b10:BBB = 10
    let a10 :AAA<number> = {value:10}

    //调用自己
    type Tree<T> = {
        value: T;
        left: Tree<T>;
        right: Tree<T>;
    }
    type Yikes = Array<Yikes>
    //字符串字面两枚行
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); 
//可辨识类型  （自动辨识对应的字符串类型）
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}


//完整性检查   当没有涵盖所有可辨识联合的变化时，我们想让编译器可以通知我们
//首先是启用 --strictNullChecks并且指定一个返回值类型
//never
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}
//多态的 this类型  类似于jq
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();
//索引类型
//keyof T， 索引类型查询操作符。 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合
let personProps: keyof Person5; 
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}
//索引类型和字符串索引签名
interface Map1<T> {
    [key: string]: T;
}
let keys: keyof Map1<number>; // string
let value: Map1<number>['foo']; // number
//映射类型
type Readonly1<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial1<T> = {
    [P in keyof T]?: T[P];
}
type PersonPartial = Partial1<Person5>;
type ReadonlyPerson = Readonly1<Person5>;