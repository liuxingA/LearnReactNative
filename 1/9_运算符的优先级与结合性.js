//优先级
var res =  2+5*4;
console.log(res);//结果为22
//结合性
//左结合性
var a = 1+2+3;//结果为6 相当于(1+2)+3
//右结合性
var b = c = 5;//相当于c=5; b=c;

//例子
var i=3;
var j=3;
var n=3;
var a = i++ + i++ + i++; //3+4+5
var b = ++j + ++j + ++j; //4+5+6
var c = n++ + ++n + n++; //3+5+5
console.log(""+i+" "+j+" "+n+" "+a+" "+b+" "+c);//6,6,6,12,15,13
