var str1 = new String("Hello World");
//返回特定位置的字符 下标从0开始
console.log(str1.charAt(0));//H
//返回特定位置的字符编码值
console.log(str1.charCodeAt(0));//72
//在字符串后进行拼接 将拼接后的字符串返回
console.log(str1.concat("!"));//Hello World!
//获取某个字符在字符串中的索引 从前往后找 如果没有找到将返回-1
console.log(str1.indexOf('l'));//2
//获取某个字符在字符串中的索引 从后往前找 如果没有找到将返回-1
console.log(str1.lastIndexOf('l'));//9
//进行字符串的比较 原字符串小于参数字符串则返回小于0的数 大于则返回大于0的数 相等则返回0
console.log(str1.localeCompare("Aello World"));//1
//使用正则表达式对字符串进行匹配，匹配结果将返回一个对象
console.log(str1.match(/He/));//[ 'He', index: 0, input: 'Hello World' ]
//使用正则表达式来匹配字符串，将匹配到的字符串进行替换
console.log(str1.replace(/He/,"AI"));//AIllo World
//使用正则表达式来查找某个子串的位置 如果没有找到 则返回-1
console.log(str1.search(/He/));//0
//截取范围内的子字符串
console.log(str1.slice(0,3));//Hel
//分隔字符串 返回数组 其中第1个参数为进行分割的字符 第2个参数为返回最多子串个数
console.log(str1.split("l",10));//[ 'He', '', 'o Wor', 'd' ]
//进行字符串的截取 第1个参数为开始截取的位置 第2个参数为截取的长度
console.log(str1.substr(0,2));//He
//截取下标间的子串
console.log(str1.substring(1,2));//e
//将字符串转为小写
console.log(str1.toLocaleLowerCase());//hello world
console.log(str1.toLowerCase());//hello world
//将字符串转换为大写
console.log(str1.toLocaleUpperCase());//HELLO WORLD
console.log(str1.toUpperCase());//HELLO WORLD
//去掉字符串开头和结尾的空格
console.log(str1.trim());
//从字符串左侧去掉空格
console.log(str1.trimLeft());
//从字符串右侧去掉空格
console.log(str1.trimRight());
//获取字符串对象的原始值
console.log(str1.valueOf());

console.log("Hello".length);//5
console.log("Hello World".slice(-4,-1));//orl




// console.log(str1.length);//11
// console.log(str1);//[String: 'Hello World']

