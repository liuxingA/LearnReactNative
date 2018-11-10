//通过字面量来创建正则表达式
var reg = /hello/ig;
var res = "Hello world hello".match(reg)
console.log(res);//[ 'Hello', 'hello' ]
var reg2 = new RegExp("hello",'ig');
console.log("Hello world hello".match(reg2));//[ 'Hello', 'hello' ]
//需要进行转义
var reg3 = new RegExp("\\d");
var reg4 = /\d/;
console.log("123".match(reg3));
//字符类别
reg = /h..l/;
console.log("hello".match(reg));//[ 'hell', index: 0, input: 'hello' ]
reg = /\dh/;
console.log("5hello".match(reg));//[ '5h', index: 0, input: '5hello' ]
reg = /\Dh/;
console.log("Ehello".match(reg));//[ 'Eh', index: 0, input: 'Ehello' ]
reg = /h\w/;
console.log("Ehello".match(reg));//[ 'he', index: 1, input: 'Ehello' ]
reg = /h\W/;
console.log("h$llo".match(reg));//[ 'h$', index: 0, input: 'h$llo' ]
reg = /h\se/;
console.log("h ello".match(reg));//[ 'h e', index: 0, input: 'h ello' ]
reg = /h\S/;
console.log("hello".match(reg));//[ 'he', index: 0, input: 'hello' ]
//字符集合
reg = /h[abced]/;
console.log("hello".match(reg));//[ 'he', index: 0, input: 'hello' ]
reg = /h[a-e]/;
console.log("hello".match(reg));//[ 'he', index: 0, input: 'hello' ]
//边界
reg = /^h/;
console.log("hello".match(reg));//[ 'h', index: 0, input: 'hello' ]
reg = /o$/;
console.log("hello".match(reg));//[ 'o', index: 0, input: 'hello' ]
//数量词
reg = /el*/;
console.log("hello".match(reg));//[ 'ell', index: 1, input: 'hello' ]
reg = /el+/;
console.log("hello".match(reg));//[ 'ell', index: 1, input: 'hello' ]
reg = /l(?!l)./;
console.log("hello".match(reg));//[ 'lo', index: 3, input: 'hello' ]
reg = /l{2}/;
console.log("hello".match(reg));//[ 'll', index: 2, input: 'hello' ]

var reg = new RegExp(/l./);
//对目标字符串进行正则匹配
console.log(reg.exec("hello"));//[ 'll', index: 2, input: 'hello' ]
//检测目标字符串是否可以通过正则验证，即匹配到结果
console.log(reg.test("hello"));//true


//是否开启的全局匹配模式
console.log(reg.global);//false
//是否开启了忽略大小写
console.log(reg.ignoreCase);//false
//是否开启了多行模式
console.log(reg.multiline);//false



