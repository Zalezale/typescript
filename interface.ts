/**
 * 1、可选属性
 * interface Circle{radius?:number}
 * 2、只读属性
 * interface Circle1{readonly radius:number}
 * 3、而外的属性检查
 * interface Circle2{[propName:string]:any}
 * 4、函数类型
 * interface Circle3{(radius:number):number}
 * 5、可索引类型
 * interface Circle4{[index:number|string]:string} //数字索引返回值必须是字符串索引的返回值值的子类行
 * 6、类类型   方法必须实现，属性可以不实现
 * interface ClockInterface {currentTime: Date; setTime(d: Date);}
 * class Clock implements ClockInterface {
 * 	currentTime: Date;
 * setTime(d: Date) { this.currentTime = d;}
 * constructor(h: number, m: number) { }}
 * 7、静态部分与实例部分的区别
 * 8、接口继承
 * interface Circle5 extends Circle1,Circle2{name:string}
 * 9、混合类型
 * 10、接口继承类 （可继承私有和保护成员）
 */
