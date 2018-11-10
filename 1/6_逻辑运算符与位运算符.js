//逻辑与运算
console.log(true&&true);//true
console.log(false&&true);//false
console.log(true&&false);//false
console.log(false&&false);//false
//与运算的相关规则
var obj = {name:'jaki'};
//两个对象进行逻辑与运算 结果为第二个对象
console.log({}&&obj);
console.log(null&&true);//null
console.log(true&&null);//null
console.log(NaN&&true);//NaN
console.log(true&&NaN);//NaN
console.log(undefined&&true);//undefined
console.log(true&&undefined);//undefined

var v1 = 10;
var v2 = true;
console.log(v2&&(v1++));
console.log(v1);//11
var v3 = 10;
var v4 = false;
console.log(v4&&(v3++));
console.log(v3);//10

//或运算运算规则
console.log(obj||false);//obj
console.log(true||obj);//true
console.log({}||obj);//{}

//逻辑非运算
console.log(!true);//false
console.log(!obj);//false
console.log(!0);//true
console.log(!23);//false
console.log(!null);//true
console.log(!NaN);//true
console.log(!undefined);//true