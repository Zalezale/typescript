//合并接口   同名成员同类型   成员顺序后定义在前（如果签名里有一个参数的类型是 单一的字符串字面量最前）
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
//finaly
// interface Document {
//     createElement(tagName: "canvas"): HTMLCanvasElement;
//     createElement(tagName: "div"): HTMLDivElement;
//     createElement(tagName: "span"): HTMLSpanElement;
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: any): Element;
// }

//合并命名空间   非导出成员不同命名空间不可见
namespace Animal {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  
    }
}
//finaly
// namespace Animal{
//     export function animalsHaveMuscles(){
//         ...
//     }
//     export function doAnimalsHaveMuscles(){
//         ...
//     }
// }

//命名空间与类和函数和枚举类型合并   字命名空间中导出，然后在枚举，类，函数中引用
//方法
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}
//类
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}
//枚举
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

//模块扩展
// observable.ts stays the same
// map.ts
import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}


// consumer.ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map(x => x.toFixed());

//全局扩展
// observable.ts
export class Observable<T> {
    // ... still no implementation ...
}

declare global {
    interface Array<T> {
        toObservable(): Observable<T>;
    }
}

Array.prototype.toObservable = function () {
    // ...
}


