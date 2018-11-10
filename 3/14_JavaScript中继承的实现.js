// function People(name,age){
// 	this.name = name;
// 	this.age = age;
// }
// function Teacher(name,age,subject){
// 	this.init = People;
// 	this.init(name,age);
// 	delete this.init; 
// 	this.subject = subject;
// 	this.teaching = function(){
// 		console.log("教师"+this.name+"正在教授"+this.subject+"课程。");
// 	};
// }
// var jaki = new Teacher("Jaki",25,"JavaScript");
// var lucy = new Teacher("Lucy",24,"Swift");
// jaki.teaching();//教师Jaki正在教授JavaScript课程。
// lucy.teaching();//教师Lucy正在教授Swift课程。
// function People(name,age){
// 	this.name = name;
// 	this.age = age;
// }
// function Work(time){
// 	this.time = time;
// }
// function Teacher(name,age,subject){
// 	People.call(this,name,age);
// 	Work.call(this,8);
// 	this.subject = subject;
// 	this.teaching = function(){
// 		console.log("教师"+this.name+"正在教授"+this.subject+"课程。"+"工作时间："+this.time+"小时。");
// 	};
// }
// var jaki = new Teacher("Jaki",25,"JavaScript");
// var lucy = new Teacher("Lucy",24,"Swift");
// jaki.teaching();//教师Jaki正在教授JavaScript课程。工作时间：8小时。
// lucy.teaching();//教师Lucy正在教授Swift课程。工作时间：8小时。

// function People(){
// 	this.sayHi=function(){
// 		console.log("Hello,I am "+this.name+","+this.age+" years old。");
// 	}
// }
// function Teacher(name,age,subject){
// 	this.name = name;
// 	this.subject = subject;
// 	this.age = age;
// }
// Teacher.prototype = new People();
// var jaki = new Teacher("Jaki",25,"JavaScript");
// var lucy = new Teacher("Lucy",24,"Swift");
// jaki.sayHi();//Hello,I am Jaki,25 years old。
// lucy.sayHi();//Hello,I am Lucy,24 years old。
// console.log(jaki instanceof People);//true

function People(name,age){
	this.age = age;
	this.name = name;
}
//方法都放入原型链中
People.prototype = {
	constructor:People,
	sayHi:function(){
		console.log("Hello,I am "+this.name+","+this.age+" years old。");
	}
}
function Teacher(name,age,subject){
	//用对象冒充把属性继承过来
	People.call(this,name,age);
	this.subject = subject;
}
Teacher.prototype = new People();
var jaki = new Teacher("Jaki",25,"JavaScript");
var lucy = new Teacher("Lucy",24,"Swift");
jaki.sayHi();//Hello,I am Jaki,25 years old。
lucy.sayHi();//Hello,I am Lucy,24 years old。

