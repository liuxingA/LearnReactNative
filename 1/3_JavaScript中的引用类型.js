//创建教师对象
var teacher = new Object();
//为教师对象添加一些属性
teacher.name = '珲少';
teacher.age	= 25;
teacher.subject = 'JavaScript';
//为教师对象添加行为方法
teacher.teach = function(){
	console.log('正在进行教学...');
};
//字面值直接创建对象
var teacher2 = {
	name:'Jaki',
	age:25,
	teach:function(){
		console.log('正在进行教学...');
	}
};
console.log(teacher);//{ name: '珲少', age: 25, subject: 'JavaScript', teach: [Function] }
console.log(teacher2);//{ name: 'Jaki', age: 25, teach: [Function] }
console.log(typeof teacher);//object
console.log(typeof teacher2);//object
//取对象的属性
console.log(teacher.name);//珲少
console.log(teacher.age);//25
console.log(teacher.subject);//JavaScript
//通过键名字符串取值
console.log(teacher['name']);//珲少
//让对象执行行为
teacher.teach();//将打印 正在进行教学...
