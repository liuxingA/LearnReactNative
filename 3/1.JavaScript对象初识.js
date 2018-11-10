var teacher = {
	name:"珲少",
	age:25,
	subject:"JavaScript",
	teaching:function(){
		console.log("开始教学");
	},
	relaxing:function(){
		console.log("开始讲故事");
	}
};
console.log(typeof teacher);//将打印object

console.log(teacher.name);//打印教师的姓名
console.log(teacher.age);//打印教师的年龄
console.log(teacher.subject);//打印教师的专业
teacher.teaching();//执行教学动作
teacher.relaxing();//执行休息动作

console.log(teacher["name"]);//打印教师的姓名
console.log(teacher["age"]);//打印教师的年龄
console.log(teacher["subject"]);//打印教师的专业
teacher["teaching"]();//执行教学动作
teacher["relaxing"]();//执行休息动作

//修改对象
teacher.subject = "Swift";//将专业修改为Swift
teacher.teaching = function(){
	console.log("Teaching Swift");
};
teacher.students = ["July","Jeke","Even"];//添加一个学员列表
console.log(teacher);


//修改对象
teacher["subject"] = "Swift";//将专业修改为Swift
teacher["teaching"] = function(){
	console.log("Teaching Swift");
};
teacher["students"] = ["July","Jeke","Even"];//添加一个学员列表
console.log(teacher);

var person = {
	name:"Jaki",
	sayHi:function(){
		console.log("Hi,My name is " + person.name);
	}
};
person.sayHi();//将输出Hi,My name is Jaki




