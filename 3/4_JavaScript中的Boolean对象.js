var bool = new Boolean(true);
console.log(bool);//[Boolean: true]
//以下都将生成原始值为false的Boolean对象
console.log(new Boolean(0));
console.log(new Boolean(-0));
console.log(new Boolean(NaN));
console.log(new Boolean(undefined));
console.log(new Boolean(""));
console.log(new Boolean(false));
console.log(new Boolean(null));
//下面这些生成的是原始值为true的Boolean对象
console.log(new Boolean("false"));
console.log(new Boolean({}));
console.log(new Boolean(Infinity));
console.log(new Boolean(new Boolean(false)));

var bf = new Boolean(false);
if (bf.valueOf()) {
	console.log("执行了");
}