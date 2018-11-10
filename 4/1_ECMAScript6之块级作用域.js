//变量提升
// console.log(name);//undefined
// if (false) {
// 	var name = "Jaki";
// }
// console.log(name);//Jaki
// for (var i = 0 ; i < 3; i++){
// 	var sum = i;
// }
// console.log(i);//3
// console.log(sum);//2
//块级作用域
{
	var a = 10;
	let b = 10;
	console.log(b);//10
}
console.log(a);//10
// console.log(b);//程序抛出异常
for(let i=0;i<3;i++){

}
// console.log(i);//程序抛出异常
// console.log(a);//程序抛出异常
// let a = 10;
// let a = 11;//程序抛出异常
let tmp = 10;
{
	// console.log(tmp);//程序抛出异常
	let tmp = 11;
	console.log(tmp);//11
}
//将打印
/*
Hello World
Wa
New
*/
{
	let a = "New";
	{
		let a = "Wa";
		{
			let a = "Hello World";
			console.log(a);
		}
		console.log(a);
	}
	console.log(a);
}
{
	let func = function(){
		console.log("function");
	}
	func();//function
}
// func();//程序抛出异常

const PI = 3.14;
// PI = 3;//抛出异常
const teacher = {
	name:"Jaki",
	age:25
};
//对对象进行修改没问题
teacher.name = "Lucy";
teacher.age = 24;
//直接修改常量的指向则会报错
// teacher = {
// 	name:"Lucy",
// 	age:24
// };
