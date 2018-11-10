var teacher = {
	name:"Jaki",
	age:"25",
	toString:function(owner){
		console.log(owner+"姓名："+this.name+"、年龄："+this.age);
		console.log(arguments);
	}
}
teacher.toString("Teacher");//Teacher姓名：Jaki、年龄：25
var student = {
	name:"Lucy",
	age:23
}
var studentToString = teacher.toString.bind(student,"Student");
//Student姓名：Lucy、年龄：23
//{ '0': 'Student', '1': 'Hello' }
studentToString("Hello");//Student姓名：Lucy、年龄：23
teacher.toString.call(student,"Studeng");//Student姓名：Lucy、年龄：23
teacher.toString.apply(student,["Student"]);//Student姓名：Lucy、年龄：23
