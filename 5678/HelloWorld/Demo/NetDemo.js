import React, { Component } from 'react';
import {Button,View } from 'react-native';

export default class NetDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Fetch" onPress={()=>{
					fetch("https://facebook.github.io/react-native/movies.json",{
							method:'GET',
							headers:{
								name:"PK"
	
							}
						}).then((response)=>{
							console.log(response);
							var obj = response.json();
							return obj;
						}).then((obj)=>{
							console.log(obj);
						});;
				}}/>
				<Button title="AJAX" onPress={()=>{
					var request = new XMLHttpRequest();
					request.responseType = "json";
					request.onreadystatechange = ()=>{
						if (request.readyState===4) {
							console.log("success",request.response);
						}
					}
					request.open("GET","https://facebook.github.io/react-native/movies.json");
					request.send();
				}} />
			</View>
		);
	}
}

//XMLHttpRequest 需要3步
/*
1.创建XMLHttpRequest对象
2.打开链接
3.发送请求
*/