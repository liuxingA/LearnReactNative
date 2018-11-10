function* generatorSubFunc(){
	console.log("子任务一");
	yield;
	console.log("子任务二");
	return;
}

function* generatorFunc(){
	console.log("任务一");
	yield 1;
	console.log("任务二");
	yield* generatorSubFunc();
	console.log("任务三");
	return 3;
}
let g = generatorFunc();
let t1 = g.next();//任务一
let t2 = g.next();//任务二 子任务一 子任务二
let t3 = g.next();//任务三
let t4 = g.next();
console.log(t1);//{ value: 1, done: false }
console.log(t2);//{ value: 2, done: false }
console.log(t3);//{ value: 3, done: true }
console.log(t4);//{ value: undefined, done: true }

function* cal(){
	console.log("可以开始计算");
	let a = yield;
	console.log("接收参数a",a);
	let b = yield;
	console.log("接收参数b",b);
	let res = a+b;
	yield res;
	res = res*res;
	let d = yield res;
	console.log("接收参数d",d);
	res = res - d;
	return res;
}
let c = cal();
c.next();
c.next(5);
console.log(c.next(3));//{ value: 8, done: false }
console.log(c.next());//{ value: 64, done: false }
console.log(c.next(10));//{ value: 54, done: true }

var obj = {
	gFunc1:function* (){
		//...
	},
	* gFunc2(){
		//...
	}
}
