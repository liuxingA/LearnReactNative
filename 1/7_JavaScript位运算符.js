var v1 = 8;
console.log(v1.toString(2));//1000
var v2 = -8;
console.log(v2.toString(2));//-1000

var v3 = ~8;
console.log(v3);//-9
console.log(v3.toString(2));

var v4 = 1&9;
console.log(v4);//1

var v5 = 8|3;
console.log(v5);//11

var v6 = 8^11;
console.log(v6);//3

var v7 = -2<<2;
console.log(v7);//-8

var v8 = -8>>2;
console.log(v8);//-2

var v9 = 8>>>2;
console.log(v9);//2
var v10 = -8>>>2;
console.log(v10);//1073741822