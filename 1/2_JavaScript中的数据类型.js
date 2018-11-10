//5种原始类型
/*
Undefined、Null、Boolean、Number、String
*/
//Undefined类型
var unKnown;
console.log(typeof unKnown);//将打印undefined
//未声明过的变量也是未定义的
console.log(typeof unKnown2);//将打印undefined
//1个无返回值的函数
function func(){
	console.log("func");
}
var v1 = func();//将打印func
console.log(v1);//将打印undefined
//Null类型
var obj = null;
console.log(typeof obj);//将打印object
//Number类型
var num1 = 100//整数值
var num2 = 3.14//浮点值
console.log(typeof num1);//将打印number
console.log(typeof num2);//将打印number
//八进制
var num3 = 011;//对应十进制9
//十六进制
var num4 = 0x11;//对应十进制17
//科学计数法
var num5 = 1.01e3;//对应1010
var num6 = 1111000e-6;//对应1.111
//Number最大可以表示的值
console.log(Number.MAX_VALUE);//打印1.7976931348623157e+308
//Number最小可以表示的值
console.log(Number.MIN_VALUE);//打印5e-324
//正无穷
console.log(Number.POSITIVE_INFINITY);//将打印Infinity
//负无穷
console.log(Number.NEGATIVE_INFINITY);//将打印-Infinity
//NaN值
var num7 = Number("w");
console.log(num7);//将打印NaN
console.log(num7 == NaN);//将打印false
console.log(isNaN(num7));//将返回true	
//String类型
var str1 = "Hello";
var str2 = 'World';
var str3 = "Hello 'World'";