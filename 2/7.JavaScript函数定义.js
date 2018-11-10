//函数语句
function outputName(){
	console.log("Jaki");
}

//先调用
console.log(outputHello("Lcuy"));//打印出Hello Lcuy
//后定义
function outputHello(name){
	return "Hello "+name;
}
 
//函数表达式
var outputAge = function(age){
	console.log("My age is "+age);
};
//将outputAge函数传递给新的变量
var newFunc = outputAge;
//重新对outputAge赋值
outputAge = "Hello world";
newFunc(25);//将打印My age is 25
console.log(outputAge);//将打印Hello world

//定义一个递归阶乘函数
var mathFunc = function mathF(a){
	var res = a;
	a--;
	if (a>0) {
		res *= mathFunc(a);
	}
	return res;
};
var mathRes = mathFunc(5);
console.log(mathRes);//120