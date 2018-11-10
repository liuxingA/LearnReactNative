//以当前时间创建Date对象
var date = new Date();
console.log(date);//2017-02-27T02:11:03.945Z
//以指定时间戳创建Date对象 时间戳单位为毫秒
date = new Date(1483888888999);
console.log(date);//2017-01-08T15:21:28.999Z
//以指定的字符串创建Date对象 字符串必须为标准格式的时间字符串
date = new Date("December 17, 2017 03:24:00");
console.log(date);//2017-12-16T19:24:00.000Z
//设置年、月、日、时、分、秒、毫秒来创建Date对象
date = new Date(2017,10,11,8,10,40,133);
console.log(date);//2017-11-11T00:10:40.133Z

//返回从1970年1月1日起至现在经过的毫秒数
console.log(Date.now());//1488162786627
//解析一个日期时间字符串
console.log(Date.parse("December 17, 2017 03:24:00"));//1513452240000
//指定日期时间 返回时间戳
console.log(Date.UTC(2017,0,1,10,30,30,120));//1483266630120

var date = new Date();
//根据本地时间获取日期对象是当前月的第几天
console.log(date.getDate());
//根据本地时间获取星期 从0开始 0表示周日 
console.log(date.getDay());
//根据本地时间获取日期对象当前的年份
console.log(date.getFullYear());
//根据本地时间获取日期对象当前的小时 0-23
console.log(date.getHours());
//根据本地时间获取日期对象当前的分钟 
console.log(date.getMinutes());
//根据本地时间获取日期对象当前的秒数
console.log(date.getSeconds());
//根据本地时间获取日期对象当前的毫秒数
console.log(date.getMilliseconds());
//根据本地时间获取日期对象当前的月份 从0开始 0表示1月
console.log(date.getMonth());
//返回时间戳 单位毫秒
console.log(date.getTime());
//获取当前时区的时区偏移
console.log(date.getTimezoneOffset());
//根据通用时间获取当前日期对象是当前月的第几天
console.log(date.getUTCDate());
//根据通用时间获取当前日期对象的星期数 0表示周日
console.log(date.getUTCDay());
//根据通用时间获取日期对象当前的年份
console.log(date.getUTCFullYear());
//根据通用时间获取日期对象当前的小时
console.log(date.getUTCHours());
//根据通用时间获取日期对象当前的分钟
console.log(date.getUTCMinutes());
//根据通用时间获取日期对象当前的秒数
console.log(date.getUTCSeconds());
//根据通用时间获取日期对象当前的毫秒数
console.log(date.getUTCMilliseconds());
//根据通用时间获取日期对象当前的月份 从0开始 0表示1月
console.log(date.getUTCMonth());

var date = new Date();
//根据本地时间为日期对象设置月份中的第几天
date.setDate(10);
//根据本地时间为日期对象设置年份
date.setFullYear(1999);
//根据本地时间为日期对象设置小时
date.setHours(11);
//根据本地时间为日期对象设置毫秒数
date.setMilliseconds(123);
//根据本地时间为日期对象设置分钟数
date.setMinutes(30);
//根据本地时间为日期对象设置月份
date.setMonth(1);
//根据本地时间为日期对象设置秒数
date.setSeconds(30);
//根据时间戳来设置日期对象的时间 如果早于1970年1月1日 可以设置为负值
date.setTime(1488167242644);
//根据通用时间为日期对象设置月份中的第几天
date.setUTCDate(10);
//根据通用时间为日期对象设置年份
date.setUTCFullYear(1970);
//根据通用时间为日期对象设置毫秒数
date.setUTCMilliseconds(123);
//根据通用时间为日期对象设置分钟数
date.setUTCMinutes(30);
//根据通用时间为日期对象设置月份
date.setUTCMonth(1);
//根据通用时间为日期对象设置秒数
date.setUTCSeconds(30);

var date = new Date();
//以一种已读的方式返回日期
console.log(date.toDateString());//Mon Feb 27 2017 星期 月 日 年
//返回符合ISO标准的日期字符串
console.log(date.toISOString());//2017-02-27T05:13:25.025Z
//使用 toISOString() 返回一个表示该日期的字符串
console.log(date.toJSON());//2017-02-27T05:14:11.414Z
//返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联
console.log(date.toLocaleDateString());//2/27/2017
//返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联
console.log(date.toLocaleString());//2/27/2017, 1:16:27 PM
//返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联
console.log(date.toLocaleTimeString());//1:17:00 PM
//返回一个表示该日期对象的字符串
console.log(date.toString());//Mon Feb 27 2017 13:17:48 GMT+0800 (CST)
//以人类易读格式返回日期对象时间部分的字符串
console.log(date.toTimeString());//13:18:19 GMT+0800 (CST)
//把一个日期对象转换为一个以UTC时区计时的字符串
console.log(date.toUTCString());//Mon, 27 Feb 2017 05:18:43 GMT
//从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数 与getTime()方法一致	
console.log(date.valueOf());

var date = new Date(90,9,22);
console.log(date);//1990-10-21T16:00:00.000Z














