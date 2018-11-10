var num1 = new Number(5);
console.log(num1);//将打印[Number: 5]
console.log(typeof num1);//将打印object

//可以表示的两个数值之间的最小间隔
console.log(Number.EPSILON);//2.220446049250313e-16
//JavaScript中最大的安全整数
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
//能表示的最大数
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
//能表示的最接近0的数
console.log(Number.MIN_VALUE);//5e-324
//非数字值
console.log(Number.NaN);//NaN
//负无穷大
console.log(Number.NEGATIVE_INFINITY);//-Infinity
//正无穷大
console.log(Number.POSITIVE_INFINITY);//Infinity

//判断传入的参数是否是NaN
console.log(Number.isNaN(1));
//判断是否是有限数字
console.log(Number.isFinite(1));
//判断是否为整数 字符串将输出位false
console.log(Number.isInteger("1"));
//判断是否为安全的整数
console.log(Number.isSafeInteger(1));
//将字符串转换为浮点值
console.log(Number.parseFloat("1.23"));
//将字符串转换为整数值
console.log(Number.parseInt("123.12"));


var num2 = new Number(123);
//将数字转换成科学计数法 传入的参数为保留小数的位数
console.log(num2.toExponential(2));//1.23e+2
//将数字转换成字符串 传入的参数为保留小数的位数
console.log(num2.toFixed(2));//123.00
//将数字转换为指定有效数字长度的数字 传入的参数为有效数字的位数
console.log(num2.toPrecision(2));//1.2+e2
//将数字转换成字符串 传入的参数设置进制
console.log(num2.toString(10));//123
//返回Number实例对象的原始值
console.log(num2.valueOf());

var num3 = 100;
console.log(typeof num3);//number
var str = num3.toString();
console.log(typeof str);//string
console.log(typeof num3);//number

var num4 = Number(5);
console.log(typeof num4);//number
