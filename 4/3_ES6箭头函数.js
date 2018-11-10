// function exp(a){
// 	return a*a;
// }
// let res = exp(5);
// console.log(res);

// let f = (a)=>{
// 	return a*a;
// }
// let res = f(5);
// console.log(res);

let f = a=>a*a;
let res = f(5);
console.log(res);

let func = ({name,age})=>console.log(name,age);
func({name:"Jaki",age:25});//Jaki 25
//箭头函数this的固化
let teacher = {
	name:"Jaki",
	age:25,
	// print:function(){
	// 	console.log(this.name,this.age);
	// }
	print:()=>{
		console.log(this.name,this.age);
	}
}
let student = {
	name:"Lucy",
	age:24,
	print:teacher.print
}
teacher.print();//undefined undefined
student.print();//undefined undefined

function foo(){
	let _this = this;
	this.name = "foo";
	this.inline = ()=>{
		console.log(_this.name);
	};
	this.outline = function(){
		console.log(this.name);
	}
}
let obj = new foo();
obj.inline();//foo
obj.inline.call({name:"Jaki"});//foo
obj.outline();//foo
obj.outline.call({name:"Jaki"});//Jaki



