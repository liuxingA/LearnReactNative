
export default class  NetTool {
	constructor(){
		this.apis = ["https://api.tianapi.com/social/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/guonei/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/world/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/huabian/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/tiyu/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/football/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/nba/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/keji/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/startup/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/apple/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/military/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/mobile/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/travel/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/health/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/qiwen/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/meinv/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/vr/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page=",
					 "https://api.tianapi.com/it/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=20&page="
		];
	}
	getNewsData(type,page,callback){
		let url = this.apis[type]+page;
		fetch(url,{
			method:'GET'}).then((response)=>{
			return response.json();
		}).then((data)=>{
			callback(data);
		})
	}
}