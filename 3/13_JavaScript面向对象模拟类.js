//模拟类
// function Teacher(name,age,subject){
// 	var obj = {};
// 	obj.name = name;
// 	obj.age = age;
// 	obj.subject = subject;
// 	obj.teaching = function(){
// 		console.log("我是"+this.name+",欢迎大家来听"+this.subject+"教学课程。");
// 	}
// 	return obj;
// }
// var jaki = Teacher("Jaki","25","JavaScript");
// var lucy = Teacher("Lucy","24","Swift");
// jaki.teaching();//我是Jaki,欢迎大家来听JavaScript教学课程。
// lucy.teaching();//我是Lucy,欢迎大家来听Swift教学课程。


// function Teacher(name,age,subject){
// 	this.name = name;
// 	this.age = age;
// 	this.subject = subject;
// 	this.teaching = function(){
// 		console.log("我是"+this.name+",欢迎大家来听"+this.subject+"教学课程。");
// 	}
// }
// var jaki = new Teacher("Jaki","25","JavaScript");
// var lucy = new Teacher("Lucy","24","Swift");
// jaki.teaching();//我是Jaki,欢迎大家来听JavaScript教学课程。
// lucy.teaching();//我是Lucy,欢迎大家来听Swift教学课程。

// var Teacher = {
// 	name:"Jaki",
// 	age:25,
// 	subject:"JavaScript",
// 	teaching:function(){
// 		console.log("我是"+this.name+",欢迎大家来听"+this.subject+"教学课程。");
// 	}
// }
// var jaki = Object.create(Teacher);
// jaki.teaching();//我是Jaki,欢迎大家来听JavaScript教学课程。

var Teacher = {
	init:function(name,age,subject){
		var teacher = {};
		teacher.name = name;
		teacher.age = age;
		teacher.subject = subject;
		teacher.teaching = function(){
			console.log("我是"+this.name+",欢迎大家来听"+this.subject+"教学课程。");
		}
		return teacher;
	}
};
var jaki = Teacher.init("Jaki",25,"JavaScript");
var lucy = Teacher.init("Lucy",24,"Swift");
jaki.teaching();//我是Jaki,欢迎大家来听JavaScript教学课程。
lucy.teaching();//我是Lucy,欢迎大家来听Swift教学课程。

