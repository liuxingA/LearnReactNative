import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
export default class StyleSheetDemo extends Component{
	render(){
		return(
			<View style={style.container}>
				<View style={style.view1}></View>
				<View style={style.view2}></View>
				<View style={style.view3}></View>
			</View>
		);
	}
}
//定义样式表
let style = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'red'
	},
	view1:{
		height:30,
		marginTop:10,
		backgroundColor:'blue'
	},
	view2:{
		height:50,
		marginTop:20,
		backgroundColor:'green'
	},
	view3:{
		height:40,
		marginTop:20,
		backgroundColor:'yellow'
	}
});
