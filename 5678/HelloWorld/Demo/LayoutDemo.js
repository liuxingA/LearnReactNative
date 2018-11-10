import React,{Component} from 'react';
import {View} from 'react-native';
export class LayoutDemoOne extends Component{
	render(){
		return(
			<View>
				<View style={{backgroundColor:'red',height:30,width:30}}></View>
				<View style={{backgroundColor:'green',height:30,width:30}}></View>
				<View style={{backgroundColor:'blue',height:30,width:30}}></View>
				<View style={{backgroundColor:'black',height:30,width:30}}></View>
			</View>
		);
	}
}

export class LayoutDemoTwo extends Component{
	render(){
		return(
			<View style={{height:300,flexWrap:'nowrap',backgroundColor:'yellow',overflow:'visible'}}>
				<View style={{backgroundColor:'red',width:30,height:30}}></View>
				<View style={{backgroundColor:'green',width:30,height:60}}></View>
				<View style={{backgroundColor:'blue',width:80,height:30}}></View>
				<View style={{backgroundColor:'black',width:30,height:100}}></View>
			</View>
		);
	}
}

export class LayoutDemoThree extends Component{
	render(){
		return(
			<View style={{height:300,backgroundColor:'yellow',alignItems:'center'}}>
				<View style={{backgroundColor:'red',width:30,height:30,bottom:10}}></View>
				<View style={{backgroundColor:'green',width:30,height:30,left:30}}></View>
				<View style={{backgroundColor:'blue',width:80,height:30}}></View>
				<View style={{backgroundColor:'black',width:30,height:30,right:10,top:30}}></View>
			</View>
		);
	}
}
