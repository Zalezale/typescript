//请在没有任何一种类型是所有其他候选者的超类型时明确提供类型，如果找不到最佳公共类型，则生成的推断是union数组类型(Rhino | Elephant | Snake)[]
//let zoo = [new Rhino(), new Elephant(), new Snake()];
//let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//上下文类型  带有显式类型注释的函数表达式将覆盖上下文类型
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.kkk); 
};
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.kkk);  //<- Now, no error is given
};
