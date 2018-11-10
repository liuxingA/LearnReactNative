import React, { Component } from 'react';

export default class NetTool {
	//获取文章数据
	getArticle=function(page,callback){
		let url = "http://api.tianapi.com/wxnew/?key=ef7f04344615b7ff44a8b3aa78aa27f3&num=10&page="+page;
		fetch(url,{
			method:'GET',		
		}).then((response)=>{
			return response.json();
		}).then((data)=>{
			callback(data);
		});
	}
}