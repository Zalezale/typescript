//1、编写函数类型
let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y
    }
//2、推断类型
let myAdd1: (x: number, y: number) => number =
    function (x, y) { return x + y }
//3、可选和默认参数(可选省略传入undifind,默认前置不可省略))
function myAdd2(x: string, y?: string): string {
    return x + y
}
function myAdd3(y1 = 'b', x: string, y = 'b'): string {
    return x + y
}
console.log(myAdd2('a',null))
myAdd3(undefined, 'a')
//休息参数
function myAdd4(x:string,...y:number []):string{
    return x+y[0]
}
//4、重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;//重载
function pickCard(x: number): {suit: string; card: number; };//重载
function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
let pickedCard2 = pickCard(15);
//5、this  回调中的参数
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}