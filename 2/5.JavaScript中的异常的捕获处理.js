
var InputError = {
	NotNumberError : "must input a Number Value",
	FinityError : "must input a Number is not Finity",
	DividendError:"Dividend must not be 0"
};
function div(a,b){
	if ((typeof a) != "number" || (typeof b) != "number"){
		throw InputError.NotNumberError;
	}
	if (!isFinite(a)||!isFinite(b)) {
		throw InputError.FinityError;
	}
	if (b===0) {
		throw InputError.DividendError;
	}
	return a/b;
}
try{
	var res = div("3",4);	
}catch(e){
	console.log(e);
}finally{
	console.log("异常处理结束");
}
console.log(res);//将打印undefined