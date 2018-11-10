//算术运算符
//加法运算符
var sum = 5+5;
console.log(sum);//10
var newString = "Hello" + " World";
console.log(newString);//Hello World
//加法运算中的几个特殊规则
console.log(1+NaN);//NaN
console.log(Infinity+Infinity);//Infinity
console.log(-Infinity + -Infinity)//-Infinity
console.log(1+'1');//11
//减法运算符
var sub = 10-5;
console.log(sub);//5
console.log("10"-5);//5
console.log("10"-"3");//7
console.log("s"-3);//NaN
console.log("10"-"a");//NaN
//减法运算中的几个特殊规则
console.log(1-NaN);//NaN
console.log(Infinity-Infinity);//NaN
console.log(-Infinity - -Infinity);//NaN
console.log(Infinity - -Infinity);//Infinity
console.log(-Infinity - Infinity);//-Infinity
//正负运算符
var num1 = 10;
var num2 = -10;
console.log(+num1);//不改变符号 10
console.log(+num2);//不改变符号 -10
console.log(-num1);//改变符号 -10
console.log(-num2);//改变符号 10
console.log(typeof +"1")//number
//乘法运算符
var mul = 3*4;
console.log(mul);//12
//乘法运算中的几个特殊规则
console.log(1*NaN);//NaN
console.log(Infinity*0);//NaN
console.log(Infinity * 1);//Infinity
console.log(Infinity * -1);//-Infinity
console.log(Infinity * Infinity);//Infinity
console.log(-Infinity * -Infinity);//Infinity
console.log(-Infinity * Infinity);//-
//除法运算符
var del = 88/10;
console.log(del);//8.8
//除法运算中的几个特殊规则
console.log(10/NaN);//NaN
console.log(Infinity/Infinity);//NaN
console.log(Infinity/100);//Infinity
console.log(10/Infinity);//0
console.log(100/0);//Infinity
console.log(0/100);//0
//取模运算符
var res = 17%8;
console.log(res);//1
var res2 = 10.7%1.5
console.log(res2);//约等0.2
//取模运算中的几个特殊规则
console.log(Infinity%1);//NaN
console.log(Infinity%Infinity);//NaN
console.log(100%Infinity);//100
console.log(0%100);//0
console.log(100%0);//NaN
