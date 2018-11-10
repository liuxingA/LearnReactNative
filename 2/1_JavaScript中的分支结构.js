//if-else结构
//if结构1
var condition = 10 > 5;
var condition2 = 10 > 5;
var condition3 = 10 > 5;
if (condition) {
	console.log("分支一"); //将进行执行
}
console.log("结束");
//if结构2
if (condition) {
	console.log("分支一");
} else {
	console.log("分支二");
}
console.log("结束");
//if结构三
if (condition) {
	console.log("分支一");
} else if (condition2) {
	console.log("分支二");
} else if (condition3) {
	console.log("分支三");
} else {
	console.log("分支四");
}
console.log("结束");

var score = 4;
if (score == 1) {
	console.log("不及格");
} else if (score == 2) {
	console.log("及格");
} else if (score == 3) {
	console.log("良好");
} else if (score == 4) {
	console.log("优秀");
} else if (score == 5) {
	console.log("卓越");
} else {
	console.log("无效的分数");
}

switch (score) {
	case 1:{
			console.log("不及格");
		}
		break;
	case 2:{
			console.log("及格");
		}
		break;
	case 3:{
			console.log("良好");
		}
		break;
	case 4:{
			console.log("优秀");
		}
		break;
	case 5:{
			console.log("卓越");
		}
		break;
	default:{
			console.log("无效的分数");
		}
}