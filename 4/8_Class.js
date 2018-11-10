// function Teacher(name,age){
// 	this.name = name;
// 	this.age = age;
// 	this.teaching = ()=>{
// 		console.log(this.name,this.age);
// 	}
// }
// let teacher = new Teacher("Jaki",25);
// teacher.teaching();//Jaki 25

class People{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayHi(){
		console.log("sayHi");
	}
}
class Teacher extends People{
	constructor(name,age,subject){
		super(name,age);
		this.subject = subject;
		super.sayHi();
	}
	teaching(){
		console.log(this.name,this.age,this.subject);
	}
}
let teacher = new Teacher("Jaki",25,"JavaScript");//sayHi
teacher.teaching();//Jaki 25 JavaScript