import React,{Component} from 'react';
import {KeyboardAvoidingView,TextInput,View,Button} from 'react-native';
export default class KeyboardAvoidingViewDemo extends Component{
	render(){
		return(
			<View style={{justifyContent:'flex-end',bottom:0,flex:1}}>
			<Button title='TEXT' onPress={()=>{
				console.log("===");
			}}/>
			<KeyboardAvoidingView behavior={'position'}>
				<TextInput style={{borderWidth:1,borderColor:'gray',height:30}}/>
			</KeyboardAvoidingView>
			</View>
		);
	}
}
