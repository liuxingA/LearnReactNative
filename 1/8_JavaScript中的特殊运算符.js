//自增与自减运算符
var a = 10;
var b = 10;
//进行自增与自减运算
a++;
b--;
console.log(a); //将打印11
console.log(b); //将打印9

//自增/减运算符的前置与后置
var c = 10;
var d = 10;
console.log(c++); //将打印10
console.log(++d); //将打印11
console.log(c); //将打印11
console.log(d); //将打印11

var e = 10;
var f = 10;
console.log(e--); //将打印10
console.log(--f); //将打印9
console.log(e); //将打印9
console.log(f); //将打印9

//条件结构
var res;
if(true){
	res = 10;
}else{
	res = 0;
}
console.log(res);//将打印10

//条件表达式
var res = true?10:0;
console.log(res);//将打印10

//逗号表达式
var r1 = 1+3,r2=1*3;
console.log(r1),console.log(r2);//将打印4 3

var obj = {
	name:"珲少",
	age:25
};
console.log(obj.name);//将打印珲少
delete obj.name;
console.log(obj.name);//将打印undefined

