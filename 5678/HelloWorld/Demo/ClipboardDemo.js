import React, { Component } from 'react';
import {Button,View,Text,TextInput,Clipboard } from 'react-native';

export default class ClipboardDemo extends Component{
	render(){
		return(
			<View style={{marginTop:20}}>
				<TextInput style={{borderWidth:1,borderColor:'gray',height:30}}/>
				<Text onPress={()=>{
					Clipboard.setString("复制文字");
				}}>复制文字</Text>
				<Button title="打印文字" onPress={()=>{
					Clipboard.getString().then((str)=>{
							console.log(str);
						});;
				}}/>
			</View>
		);
	}
}