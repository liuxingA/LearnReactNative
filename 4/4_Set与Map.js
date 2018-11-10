//创建Set集合
// let set = new Set([1,2,3,4,4,2]);
// console.log(set.size);//4
// console.log(set);//Set { 1, 2, 3, 4 }

let set = new Set();
//向集合中插入元素
set.add("Jaki");
set.add("Lucy");
console.log(set);//Set { 'Jaki','Lucy' }
//删除集合中的某个元素
set.delete("Jaki");
console.log(set);//Set {'Lucy'}
//删除集合中所有元素
set.clear();
console.log(set);//Set {}
set.add("Jaki");
set.add("Lucy");
//返回Set集合迭代器对象
console.log(set.entries());//SetIterator { [ 'Jaki', 'Jaki' ], [ 'Lucy', 'Lucy' ] }
//让集合中的所有元素调用一次回调方法
/*
将打印
Jaki
Lucy
*/
set.forEach((element)=>{
	console.log(element);
},set);
//判断集合中是否包含某个元素
console.log(set.has("Jaki"));//true
//下面这两个方法都是用来获取集合中所有元素的迭代器
console.log(set.keys());//SetIterator { 'Jaki', 'Lucy' }
console.log(set.values());//SetIterator { 'Jaki', 'Lucy' }
/*
Jaki
Lucy
*/
for(item of set){
	console.log(item);
}
let obj1 = {name:"Jaki"};
let obj2 = {name:"Lucy"};
let wSet = new WeakSet([obj1]);
//弱引用集合中是否包含某个元素
console.log(wSet.has(obj1));//true
//添加一个元素
wSet.add(obj2);
//删除一个元素
wSet.delete(obj1);

// //Map字典
// let map = new Map([["name","Jaki"],["age",25],[321,true],[321,true]]);
// console.log(map.size);//3
// console.log(map);//Map { 'name' => 'Jaki', 'age' => 25, 321 => true }
let map = new Map();
//向Map实例对象中添加键值对
map.set("name","Jaki");
map.set("age",25);
map.set(123,true);
console.log(map);//Map { 'name' => 'Jaki', 'age' => 25, 123 => true }
//删除一对键值
map.delete(123);
console.log(map);//Map { 'name' => 'Jaki', 'age' => 25 }
//返回一个Map迭代对象
console.log(map.entries());//MapIterator { [ 'name', 'Jaki' ], [ 'age', 25 ] }
//判断Map实例对象中是否包含某个键
console.log(map.has("name"));//true
//获取Map中某个键的值
console.log(map.get("name"));//Jaki
//获取Map中的所有键
console.log(map.keys());//MapIterator { 'name', 'age' }
//获取Map中的所有值
console.log(map.values());//MapIterator { 'Jaki', 25 }
// //清空Map中所有键值
// map.clear();
// console.log(map);
/*
将打印
name Jaki
age 25
*/
map.forEach((value,key)=>{
	console.log(key,value);
},map);
/*
name Jaki
age 25
*/
for(let [a,b] of map){
	console.log(a,b);
}

let wMap = new WeakMap();
let obj = {
	name:"Jaki"
}
//添加键值对
wMap.set(obj,true);
//判断某个键是否存在
console.log(wMap.has(obj));//true
//获取某个键的值
console.log(wMap.get(obj));//true
//删除一组键值对
wMap.delete(obj);
console.log(wMap.has(obj));//false





