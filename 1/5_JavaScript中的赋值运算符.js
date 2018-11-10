//赋值运算符
var string = "Hello World";
//复合运算符
//复合加赋值运算符
var v1 = 0;
v1+=10;   //相当于v1=v1+10;
console.log(v1); //10
v1-=9;    //相当于v1=v1-9;
console.log(v1);//1
v1*=10;   //相当于v1=v1*10;
console.log(v1);//10
v1/=10;   //相当于v1=v1/10;
console.log(v1);//1
v1&=0;    //相当于v1=v1&0;
console.log(v1);//0
v1|=1;    //相当于v1=v1|1;
console.log(v1);//1
v1<<=1;   //相当于v1=v1<<1;
console.log(v1);//2
v1>>=1;   //相当于v1=v1>>1;
console.log(v1);//1
v1>>>=1;   //相当于v1=v1>>>1;
console.log(v1);
//比较运算符
//数字之间的比较
console.log(1<2);//true
console.log(1>2);//false
console.log(1==2);//false
//字符串与字符串进行比较
console.log("a">"b");//false
console.log("a"<"b");//true
console.log("ss"=="ss");//true
console.log("12">"3");//false
//数字与字符串间比较
console.log("3">10);//false
console.log("a">0);//false

console.log(12<=12);//true
console.log(1>=2);//false
//相等比较
console.log(true==1);//true
console.log(2==true);//false
console.log(false==0);//true
console.log("11"==11);//true
var obj = {name:'jaki'};
console.log(obj=="[object Object]");//true
console.log(1!=2);//true
console.log(null==undefined);//true
//全等比较
console.log(11==="11");//false
console.log(true!==1);//true

var ex = "ss";
console.log(ex>1);//false
console.log(ex<=1);//false