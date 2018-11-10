import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import DataManager from './../Data/DataManager';

export default class NavigationBar extends Component{
	render(){
		if (this.props.type === 'root') {
			return(
			<View style={naviStyles.bar}>
				<View style={naviStyles.textView}>
					<Text style={naviStyles.text}>
						{this.props.title}
					</Text>
				</View>
				<TouchableOpacity onPress={this.props.goCollection} style={naviStyles.rightButton}>
					<Text>收藏夹</Text>
				</TouchableOpacity>
			</View>
			);
		}else if(this.props.type === 'detail'){
			return(
			<View style={naviStyles.bar}>

				<View style={naviStyles.textView}>
					<Text style={naviStyles.text}>
						{this.props.title}
					</Text>
				</View>
				<TouchableOpacity onPress={this.props.pop} style={naviStyles.leftButton}>
					<Text>返回</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{
					DataManager.addCollection(this.props.url);
					Alert.alert("提示","您已经添加到收藏夹");
				}} style={naviStyles.rightButton}>
					<Text>添加收藏</Text>
				</TouchableOpacity>
			</View>
			);
		}else if(this.props.type === 'collection'){
			return(
			<View style={naviStyles.bar}>
				<View style={naviStyles.textView}>
					<Text style={naviStyles.text}>
						{this.props.title}
					</Text>
				</View>
				<TouchableOpacity onPress={this.props.pop} style={naviStyles.leftButton}>
					<Text>返回</Text>
				</TouchableOpacity>
			</View>
			);
		}

	}
}

let naviStyles = StyleSheet.create({
	bar:{
		height:64,
		backgroundColor:'rgb(241,241,241)',
		flexDirection:'row',
	},
	textView:{
		alignSelf:'center',
		justifyContent:'center',
		flex:1
	},
	text:{
		textAlign:'center',
		fontSize:17
	},
	rightButton:{
		position:'absolute',
		right:15,
		alignSelf:'center',
	},
	leftButton:{
		position:'absolute',
		left:15,
		alignSelf:'center',
	},

});