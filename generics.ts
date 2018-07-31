//1、类型变量
function identity<T>(arg:T):T{
    return arg
}
let output = identity<string>("myString")
//2、类型参数推断
let output1 = identity('myString')
//3、使用通用类型变量
function loggingIdentity<T>(arg:T[]):T[]{
    return arg
}
//4、通用类型
function identity1<T>(arg:T):T{
    return arg
}
let myIdentity1:<T>(arg:T)=>T=identity
let myIdentity2:<U>(arg:U)=>U=identity
interface GenericIdentityFn{
    <T>(arg:T):T
}
interface GenericIdentityFn1<T>{
     (arg:T):T
}
let myIdentity3 : GenericIdentityFn = identity
let myIdentity4 : GenericIdentityFn1<number> = identity
//5、通用类
class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T
}
let myG = new GenericNumber<number>()
myG.zeroValue = 0
myG.add = function(x,y){return x+y}
//6、通用约束
interface Lengtwise{
    length:number
}
function log<T extends Lengtwise>(arg:T):T{
    console.log(arg.length)
    return arg
}
//在通用约束中使用类型参数
function getP<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
let x = {a:1,b:2,c:3,d:4}
getP(x,'a')

//、在泛型中使用类类型
function create<T>(c:{new():T}):T{
    return new c()
}