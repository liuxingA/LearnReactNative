//使用字面量语法创建对象
var teacher = {
	name:"Jaki",
	age:25,
	teaching:function(){
		console.log("teching...");
	}
};
Object.defineProperties(teacher,{
	"name":{
		value:"珲少",
		writable:false
	},
	"age":{
		value:25,
		writable:false
	}
});



//使用Object构造函数创建对象
var student = new Object();
student.name = "Lucy";
student.age = 24;
student.learning = function(){
	console.log("learning...");
};
var name = "Lucy";
Object.defineProperty(student,"name",{
	configurable:true,
	enumerable:true,
	// writable:true,
    // value:"Lucy",
	get:function(){
		console.log("正在使用name属性");
		return name;
	},
	set:function(value){
		console.log("将要设置name属性");
		name = value;
	}
});
console.log(student.name);//正在使用name属性 Lucy
student.name = "July";//将要设置name属性
console.log(student.name);//正在使用name属性 July
var prop = Object.getOwnPropertyDescriptor(teacher,"name");
console.log(prop);