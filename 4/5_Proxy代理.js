let teacher = {
	name:"Jaki",
	age:25,
	teaching:function(){
		console.log("teaching");
	}
}
console.log(teacher.name);//Jaki

let proxy_teacher = new Proxy(teacher,{
	//添加属性时会触发
	set:(target,key,value,receiver)=>{
		console.log("添加属性:",key);
		target[key] = value;
	},
	//获取属性时会触发
	get:(target,key,receiver)=>{
		console.log("获取属性:",key);
		return target[key];
	},
	//判断对象中是否包含某个属性时触发
	has:(target,key)=>{
		console.log("检查属性:",key);
		return key in target;
	},
	//输出对象属性时触发
	deleteProperty:(target,key)=>{
		console.log("删除属性:",key);
		delete target[key];
	},
	//拦截getOwnPropertyNames()和keys()方法
	ownKeys:(target)=>{
		console.log("获取所有自身属性");
		return Object.getOwnPropertyNames(target);
	},
	//拦截defineProperty()和definePropertys()方法
	defineProperty:(target,key,desc)=>{
		console.log("定义属性:",key);
		return Object.defineProperty(target,key,desc);
	},
	//拦截preventExtensions()方法
	preventExtensions:(target)=>{
		console.log("抑制可扩展性");
		return Object.preventExtensions(target);
	},
	//拦截getPrototypeOf()方法
	getPrototypeOf:(target)=>{
		console.log("获取对象原型");
		return Object.getPrototypeOf(target);
	},
	//拦截isExtensible()方法
	isExtensible:(target)=>{
		console.log("获取对象可扩展性");
		return Object.isExtensible(target);
	},
	//拦截setPrototypeOf()方法
	setPrototypeOf:(target,proto)=>{
		console.log("设置对象原型");
		return Object.setPrototypeOf(target,proto);
	},
	//拦截call()和apply方法 用于函数对象
	apply:(target,object,arguments)=>{
		console.log("拦截call、apply方法");
		target.apply(object,arguments);
	},
	//拦截构造函数方法
	construct:(target,arguments)=>{
		return {};
	}


}); 
console.log("name" in proxy_teacher);//检查属性: name  true
delete proxy_teacher.name //删除属性: name
console.log(Object.getOwnPropertyNames(proxy_teacher)); //获取所有自身属性 [ 'name', 'age', 'teaching' ]
Object.defineProperty(proxy_teacher,"name",{
	value:"Jaki",
	writable:true,
	configruable:true
});//定义属性: name
// Object.preventExtensions(proxy_teacher);//抑制可扩展性
Object.getPrototypeOf(proxy_teacher);//获取对象原型
Object.isExtensible(proxy_teacher);//获取对象可扩展性
Object.setPrototypeOf(proxy_teacher,{sex:"男"});//设置对象原型



/*
将打印
获取属性: name
Jaki
添加属性: subject
获取属性: subject
JavaScript
*/
console.log(proxy_teacher.name);
proxy_teacher.subject = "JavaScript";
console.log(proxy_teacher.subject);

var proxy_normal = new Proxy({}, {
  get: function(target, property) {
  	console.log("warning:this property is undefined");
    return undefined;
  },
});

let obj = Object.create(proxy_normal);
obj.time;//warning:this property is undefined

var student = {
	name:"Lucy",
	print:function(){
		console.log(this===student);
	}
}
let proxy_student = new Proxy(student,{});
student.print();//true
proxy_student.print();//false

