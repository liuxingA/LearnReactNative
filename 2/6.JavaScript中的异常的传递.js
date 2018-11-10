var InputError = {
	NotNumberError: "must input a Number Value",
	FinityError: "must input a Number is not Finity",
	DividendError: "Dividend must not be 0"
};

function div(a, b) {
	if ((typeof a) != "number" || (typeof b) != "number") {
		throw InputError.NotNumberError;
	}
	if (!isFinite(a) || !isFinite(b)) {
		throw InputError.FinityError;
	}
	if (b === 0) {
		throw InputError.DividendError;
	}
	return a / b;
}
function newDiv(a,b) {
	try {
		var res = div(a, b);
	} catch(e){
		if (e===InputError.DividendError) {
			res = NaN;
		}else if (e==InputError.FinityError) {
			res = NaN;
		}else{
			throw e;
		}
	}finally {
		console.log("内层异常处理结束");
		return 100;
	}
	return res;
}
try{
	var res = newDiv("3",1);
}catch(e){
	console.log("输入错误!");
}finally{
	console.log("外层异常处理结束");
}
console.log(res);

