//、数字枚举
enum Direction{
    up,
    down,
    left,
    right,
}
enum E{
    A = new Date().getTime(),
     B ,//若第一位非数字则后面枚举成员必须初始化
}
//、字符串枚举
enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
//、异构枚举
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
//、计算和常数成员
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,//2
    Write   = 1 << 3,//8
    ReadWrite  = Read | Write,//10 都0为0
    // computed member
    G = "123".length
}
//、联合枚举和枚举成员类型
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}
//、枚举在运行时
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"     （反向映射）字符串成员不会形成反向映射
const enum Enum1 {
    A = 1,
    B = A * 2,
    c = new Date().getTime(),
}
//、环境枚举
declare enum Enum3 {
    A = 1,
    B,
    C = 2
}