//break语句
for(var i=0;i<5;i++){
	console.log(i);//依次输出0，1，2，3
	if (i==3) {
		break;
	}
}

for(var i=0;i<3;i++){
	console.log("i="+i);
	for(var j=0;j<3;j++){
		if (i==0) {
			break;
		}
		console.log("j="+j);
	}
	console.log("=====");
}
/*
打印结果
i=0
=====
i=1
j=0
j=1
j=2
=====
i=2
j=0
j=1
j=2
=====
*/

label:for(var i=0;i<3;i++){
	console.log("i="+i);
	for(var j=0;j<3;j++){
		if (i==0) {
			break label;
		}
		console.log("j="+j);
	}
	console.log("=====");
}
/*
打印结果
i=0
*/

//continue语句
for(var i=0;i<5;i++){
	if (i==2) {
		continue;
	}
	console.log(i);//依次输出0，1，3,4
}

for(var i=0;i<3;i++){
	console.log("i="+i);
	for(var j=0;j<3;j++){
		if (j==0) {
			continue;
		}
		console.log("j="+j);
	}
	console.log("=====");
}
/*
打印结果
i=0
j=1
j=2
=====
i=1
j=1
j=2
=====
i=2
j=1
j=2
=====
*/
console.log("---------");
label2:for(var i=0;i<3;i++){
	console.log("i="+i);
	for(var j=0;j<3;j++){
		if (j==0) {
			continue label2;
		}
		console.log("j="+j);
	}
	console.log("=====");
}
/*
打印结果
i=0
i=1
i=2
*/
