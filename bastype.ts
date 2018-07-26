/**
 * Basic Types
 */
//boolean
let isDone:boolean = false
//数字
let decimal:number = 6
let hex: number = 0xf00d
let binary:number = 0b1010
let octal:number = 0o744
//字符
let color:string = "blur",shape:string='circle',des:string = `it is a ${color+' '+shape}`
//数组
let list:number[] = [1,2,3],list1:Array<number>=[1,2,3]
//元数组
let x:[string,number] = ['name',1]
    x[2]=99,x[3]='aaa'
//枚举
enum Color  {Red,Yellow=3}
let colorName = Color.Red,colorName1=Color[3]
//Any
let notSure:any = 4
notSure = "任何值"
notSure.hah()
notSure.toString(2)
let list2:any[]=[1,true,'test']
//null undefind
let a:null = null
let b:undefined = undefined
//void
let c:void = undefined
let d:void = null
//never  只有跑出异常或者无限循环
function error(message:string):never{
    throw new Error(message)
}
function loop():never{
    while(true){

    }
}
//强制类型转换，只能从any到其他类型
let some:any = 1111
let len:number =(some as string).length

