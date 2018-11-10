var output = new Function("name","console.log(name);");
output("Jaki");//将打印输出Jaki

function myFunc(){
	//将传入的参数倒叙输出
	for (var i = arguments.length - 1; i >= 0; i--) {
		console.log(arguments[i]);
	}
}
myFunc(1,2,3);//将输出3，2，1

(function(){
	console.log("run self");
})();