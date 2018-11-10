var stus = ["Tom","Jaki","Lucy","Ami"];
console.log(typeof stus);//object

var array = new Array("Tom","Jaki","Lucy","Ami");
console.log(array.length);//4
array.length = 2;
console.log(array);//[ 'Tom', 'Jaki' ]

// //访问数组中的第1个元素
// console.log(array[0]);//Tom
// //判断某个值是否为数组
// console.log(Array.isArray(array));//true

var array = [0,1,2,3,4,5,6,7,8,9];
//删除数组最后一个元素
array.pop();
console.log(array);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
//在数组的末尾添加元素
array.push(9,10);
console.log(array);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//倒置数组
array.reverse();
console.log(array);//[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
//删除数组中的第1个元素
array.shift();
console.log(array);//[ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
//对数组进行排序
array.sort(function(a,b){
	if (a>b) {
		return 1;
	}else if(a<b){
		return -1;
	}else{
		return 0;
	}
});
console.log(array);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//进行数组元素替换 第1个参数为从哪个下标可以替换，第2个参数为要删除的元素个数 之后为要替换成的元素
array.splice(6,4,"100","end");
console.log(array);//[ 0, 1, 2, 3, 4, 5, ,'100','end' ]
//在数组开头进行元素的追加
array.unshift(0,0);
console.log(array);//[ 0, 0, 0, 1, 2, 3, 4, 5, '100', 'end' ]

var array = [0,1,2,3,4,5];
//进行数组元素追加
console.log(array.concat(6,7,8,9));//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//将所有元素以传入的参数分隔进行拼接
console.log(array.join("."));//0.1.2.3.4.5
//截取子数组 第1个参数为开始截取的下标 第2个参数为截取到的下标(不包含此位置)
console.log(array.slice(0,3));//[ 0, 1, 2 ]
//将数组元素拼接成字符串 以逗号分隔
console.log(array.toString());//0,1,2,3,4,5
//返回数组中指定元素的下标 从前往后找
console.log(array.indexOf(1));//1
//返回数组中指定元素的下标 从后往后找
console.log(array.lastIndexOf(1));//1

var stus = ["Tom","Jaki","Lucy","Ami"];
//进行数组的逐个遍历，需要传入一个函数，此函数有三个参数，分别为遍历到的元素，其下标和原数组.
//第2个参数，这个参数将与遍历函数中使用的this关联
stus.forEach(function(element,index,array){
	console.log(element,index,array);
},stus);
//对数组进行检查 传入一个函数，函数中的参数分别为遍历到的元素，
//其下标和原数组 此函数需要返回一个布尔值 如果返回ture 则继续遍历，
//如果返回false则停止。
//当所有元素都遍历完成并且都返回true时，结果才为true，否则都为false
//every方法还可以传入第2个参数，这个参数将与遍历函数中使用的this关联
var notHaveAmi = stus.every(function(element,index,array){
	console.log(this);
	console.log(element,index,array);
	if (element == "Ami") {
		return false;
	}else{
		return true;
	}
},stus);
console.log(notHaveAmi);//false
//some遍历方法与every对应，只是其回调是全部返回false，结果才为false，否则为true
var haveAmi = stus.some(function(element,index,array){
	console.log(this);
	console.log(element,index,array);
	if (element == "Ami") {
		return true;
	}else{
		return false;
	}
},stus);
console.log(haveAmi);//true
//数组过滤器 当回调函数返回true时 代表此元素通过过滤 将其添加进新数组返回
var newArray = stus.filter(function(element,index,array){
	console.log(this);
	console.log(element,index,array);
	if (element == "Ami") {
		return true;
	}else{
		return false;
	}
},stus);
console.log(newArray);//[ 'Ami' ]
//map方法将数组中的每一个元素执行回调 然后将返回值重新组成数组返回
newArray = stus.map(function(element,index,array){
	return element+"!";
},stus);
console.log(newArray);//[ 'Tom!', 'Jaki!', 'Lucy!', 'Ami!' ]
//reduce方法是数组累加器 其会按照数组从左向右的顺序依次调用回调函数
//回调函数中有3个参数 第1个参数为上次执行累加回调的返回值 第2个参数为当前遍历的元素，第3个参数为其下标
//reduce方法的第2个参数可选，其为首次进行累加回调的初始值
//如果不提供初始值，reduce函数会从数组索引为1的位置开始，跳过第1个元素
var res = stus.reduce(function(acc,element,index){
	return acc+" "+element;
},"Hello");
console.log(res);//Hello Tom Jaki Lucy Ami
//与reduce方法类似 其从右向左开始遍历
res  = stus.reduceRight(function(acc,element,index){
	return acc+" "+element;
},"Hello");
console.log(res);//Hello Ami Lucy Jaki Tom


