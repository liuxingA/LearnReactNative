var teacher = {
	name:"jaki",
	age:24,
	teaching:function(){
		console.log("teaching");
	}
};
var teacher2 = {
	subject:"JavaScript"
}
Object.defineProperty(teacher,"number",{
	value:1001,
	enumerable:false
});
console.log(teacher.number);//1001
for(prop in teacher){
	console.log(prop);
}
//进行对象可枚举属性的复制
var obj = {};
//第1个参数为目标对象 其后的参数被要被拷贝属性的对象
Object.assign(obj,teacher,teacher2);
console.log(obj.name+obj.age+obj.subject);//jaki24JavaScript
obj.teaching();//teaching
console.log(obj.number);//undefined
//深浅拷贝
var obj1 = {
	a:{
		name:"Jaki"
	},
	b:25
};
var obj2 = {};
Object.assign(obj2,obj1);
//修改obj1
obj1.a.name = "Lucy";
obj1.b = 23;
//obj2中的b并没有被修改 因为其是原始值类型 但是a属性被修改了 因为其是引用类型
console.log(obj2);//{ a: { name: 'Lucy' }, b: 25 }
//继承的实现
var base = {
	subject:"JavaScript"
}
var teacher1 = Object.create(base,{
	"name":{
		value:"Jaki",
		enumerable:true
	},
	"age":{
		value:25,
		enumerable:true
	}
});
console.log(Object.keys(teacher1));//[ 'name', 'age' ]
console.log(Object.getPrototypeOf(teacher1));//{ subject: 'JavaScript' }
console.log(Object.getOwnPropertyNames(teacher1));//[ 'name', 'age' ]
console.log(teacher1);//{ name: 'Jaki', age: 25 }
console.log(teacher1.subject);//JavaScript

var fre = {
	name:"Jaki"
};
/*
{ value: 'Jaki',
  writable: true,
  enumerable: true,
  configurable: true }
*/
var des = Object.getOwnPropertyDescriptor(fre,"name");
console.log(des);
fre = Object.freeze(fre);
fre.name = "Lucy";
//冻结的对象不能修改
console.log(fre);//{ name: 'Jaki' }
var seal = {
	name:"Jaki"
};
self = Object.seal(seal);
//密封对象不能添加新属性
seal.age = 25;//undefined
console.log(seal.age);
var ext = {
	name:"Jaki"
}
//抑制对象扩展 
ext = Object.preventExtensions(ext);
ext.age = 25;
console.log(ext.age);//undefined



