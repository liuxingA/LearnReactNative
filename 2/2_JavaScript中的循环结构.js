//数学公式进行等差数列的计算1..100
var res = (1 + 100) * 100 / 2;
console.log(res); //5050
//使用循环结构来进行计算
var i = 1;
var res2 = 0;
while (i <= 100) {
	res2 += i;
	i++;
}
console.log(res2); //5050
//do-while循环
i = 1;
res3 = 0;
do {
	res3 += i;
	i++;
} while (i <= 100);
console.log(res3); //5050
// while(true){
// 	console.log("...");
// }

//for循环
var res4 = 0;
var i = 1;
for (; i <= 100;) {
	res4 += i++;
}
console.log(res4); //5050

var teacher = {
	name: "珲少",
	age: 25,
	subject: "JavaScript"
};
for (prop in teacher) {
	/*
	将输出
	name:珲少
	age:25
	subject:JavaScript
	*/
	console.log(prop + ":" + teacher[prop]);
}