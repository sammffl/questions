// 有一个对象obj，有一个方法event，实现一个方法bindData，执行后，obj的任何赋值都会触发b的执行。
/**
var obj = { x : 1, y : 2 };
function event(){
    console.log('obj的值发生改变');
}
bindData(obj, event);
obj.x = 2; // 此时输出 a的值发生改变
 */


