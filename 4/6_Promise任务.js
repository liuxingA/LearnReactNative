//打印结果
/*
go...
任务直接完成
success
任务2执行完成
success2
*/
// let promise = new Promise(function(resolve,reject){
// 	setTimeout(()=>{
// 		console.log("任务直接完成");
// 		resolve("success");
// 	},3000);
// });
// promise.catch((error)=>{
// 	console.log(error);
// });
// promise.then((success)=>{
// 	console.log(success);
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			console.log("任务2执行完成");
// 			resolve("success2");
// 		},2000)
// 	});
// },(error)=>{
// 	console.log(error);
// }).then(success=>{
// 	console.log(success);
// });
// console.log("go...");
let promise1 = new Promise((resolve,reject)=>{
	//加延时
	setTimeout(()=>{
		console.log("任务1执行成功");
		resolve();
	},1000);
	
	
});
let promise2 = new Promise((resolve,reject)=>{
	//加延时
	setTimeout(()=>{
		console.log("任务2执行成功");
		resolve();
	},1000);
});
let promise3 = new Promise((resolve,reject)=>{
	console.log("任务3执行失败");
	reject();
});
let promiseGroup = Promise.race([promise1,promise2,promise3]);
/*
任务3执行失败
任务组执行失败
任务1执行成功
任务2执行成功
*/
promiseGroup.then(success=>{
	console.log("任务组执行成功");
},error=>{
	console.log("任务组执行失败");
});



