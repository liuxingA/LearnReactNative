let students = ["Jaki","Lucy","Mery","July"];
//取数组中第1个元素
let stu1 = students[0];//Jaki
//取数组中第2个元素
let stu2 = students["1"];//Lucy
//进行数组的解构赋值
let [a,b,c,d] = students;
console.log(a+" "+b+" "+c+" "+d);//Jaki Lucy Mery July
//不完全解构
//只提取数组中的前三个数据
let [e,f,g] = students;
console.log(e+" "+f+" "+g);//Jaki Lucy Mery
//只提取数组中的第四个一个数据
let [,,,h] = students;
console.log(h);//July
//提取数组中的第1个值 并将其余值放入另一个数组
let [i,...j] = students;
console.log(i+" "+j);//Jaki [Lucy,Mery,July]
//溢出的变量将被赋值为undefined
let [k,l,m,n,o] = students;
console.log(k+" "+l+" "+m+" "+n+" "+o);//Jaki Lucy Mery July undefined
//解构赋值的嵌套
let array = [1,2,[5,6,7]];
let [p,q,[r,s,t]] = array;
console.log(""+p+q+r+s+t);//12567
//设置默认值
let [u=0,v=0,w=0] = [1,undefined];
console.log(u+" "+v+" "+w);//1 0 0
[u=0,v=0,w=0] = [1,NaN,null];
console.log(u+" "+v+" "+w);//1 NaN null
//对象的解构赋值
let teacher = {
	name:"Jaki",
	age:25,
	students:[
		{
			name:"Lucy",
			age:24
		},
		{
			name:"July",
			age:26
		}
	],
	teaching:function(){
		console.log("teaching...");
	}
};
let {students:[{name:name1},{name:name2}]} = teacher;
console.log(name1+" "+name2);//Lucy July
let {name:name,age:age} = teacher;
({name:name,age:age} = teacher);
console.log(name+" "+age); //jaki 25
let {0:x,1:y} = [1,2];
console.log(x+" "+y);//1 2

let [c1,c2,c3,c4,c5] = "Hello";
console.log(c1+c2+c3+c4+c5);//Hello

let people = {
	name:"Jaki",
	age:25
};
function print({name="name",age=0}={name:"Jaki",age:25}){
	console.log(name+":"+age);
};
print({});//name:0
print();//Jaki:25


let v1=10;
let v2=11;
// let v3 = v1;
// v1 = v2;
// v2 = v3;
[v1,v2] = [v2,v1];
console.log(v1);
console.log(v2);



