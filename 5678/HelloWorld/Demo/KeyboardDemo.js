import React, { Component } from 'react';
import { Keyboard, TextInput,Button,View } from 'react-native';

export default class KeyboardDemo extends Component{
	constructor(props){
		super(props);
		Keyboard.addListener("keyboardWillShow",()=>{
			console.log("keyboardWillShow");
		});
		Keyboard.addListener("keyboardWillShow",()=>{
			console.log("keyboardWillShow1");
		});
		Keyboard.addListener("keyboardDidShow",()=>{
			console.log("keyboardDidShow");
		});
		Keyboard.addListener("keyboardWillHide",()=>{
			console.log("keyboardWillHide");
		});
		Keyboard.addListener("keyboardDidHide",()=>{
			console.log("keyboardDidHide");
		});
		Keyboard.addListener("keyboardWillChangeFrame",(keybord)=>{
			console.log("keyboardWillChangeFrame",keybord);
		});
		Keyboard.addListener("keyboardDidChangeFrame",(keybord)=>{
			console.log("keyboardDidChangeFrame",keybord);
		});
	}

	render(){
		return(
			<View>
				<TextInput style={{height:30,marginTop:30,borderColor:'red',borderWidth:1}}/>
				<Button  title="dismiss" onPress={()=>{
					Keyboard.dismiss();
				}}/>
				<Button  title="remove" onPress={()=>{
					Keyboard.removeAllListeners("keyboardWillShow");
				}}/>
			</View>
		);
	}
}