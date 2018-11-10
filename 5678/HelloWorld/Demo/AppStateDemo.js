import React,{Component} from 'react';
import {AppState,View,Button} from 'react-native';
export default class AppStateDemo extends Component{
	constructor(props){
		super(props);
		AppState.addEventListener("change",this.handler1);
	}
	render(){
		return(
			<View>
				<Button title="addHandler2" onPress={()=>{
					AppState.addEventListener("change",this.handler2);	
				}}/>
				<Button title="removeHandler2" onPress={()=>{
					AppState.removeEventListener("change",this.handler2);	
				}}/>
			</View>
		);
	}
	handler1(){
		console.log("handler1",AppState.currentState);
		return false;
	}
	handler2(){
		console.log("handler2",AppState.currentState);
		return true;
	}
}
