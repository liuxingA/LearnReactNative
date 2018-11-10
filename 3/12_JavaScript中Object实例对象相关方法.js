var teacher = new Object();
var prototype =  {
	subject:"JavaScript"
};
//检查对象的某个属性是否为可枚举的
console.log(prototype.propertyIsEnumerable("subject"));//true
//设置原型
Object.setPrototypeOf(teacher,prototype);
teacher.name = "Jaki";
teacher.age	= 25;
teacher.teaching = function(){
	console.log("teaching");
}
console.log(prototype.isPrototypeOf(teacher));//true
//判断某个对象本身是否包含指定的属性 此属性不是原型链上的
console.log(teacher.hasOwnProperty("name"));//true

