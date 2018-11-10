import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ItemView extends Component{
	render(){
		if (this.props.item.picUrl.length>0) {
		return(
			<TouchableOpacity onPress={this.props.itemClick}>
			<View>	
				<Text style={itemStyles.title}>{this.props.item.description}</Text>
				<View style={itemStyles.contentView}>
					<Image style={itemStyles.image} source={{uri:this.props.item.picUrl}}/>
					<Text style={itemStyles.subTitle}>{this.props.item.title}</Text>
				</View>
				<Text style={itemStyles.time}>{this.props.item.ctime}</Text>
				<View style={itemStyles.line}></View>
			</View>
			</TouchableOpacity>
		);
		}else{
		return(
			<TouchableOpacity onPress={this.props.itemClick}>
			<View>	
				<Text style={itemStyles.title}>{this.props.item.description}</Text>
				<Text style={itemStyles.detail}>{this.props.item.title}</Text>
				<Text style={itemStyles.time}>{this.props.item.ctime}</Text>
				<View style={itemStyles.line}></View>
			</View>
			</TouchableOpacity>
		);
		}
	}
}

let itemStyles = StyleSheet.create({
	image:{
		width:80,
		height:120,
		marginLeft:15,
		marginTop:5
	},
	title:{
		fontSize:15,
		marginLeft:15,
		marginTop:10
	},
	contentView:{
		flexDirection:'row',
	},
	subTitle:{
		marginTop:5,
		marginRight:15,
		marginLeft:5,
		flex:1,
		fontSize:13,
		color:'rgb(111,111,111)'
	},
	detail:{
		flex:1,
		marginTop:10,
		marginLeft:15,
		fontSize:13,
		marginRight:15,
		color:'rgb(111,111,111)'
	},
	time:{
		alignSelf:'flex-end',
		marginRight:15
	},
	line:{
		backgroundColor:'rgb(233,233,233)',
		marginLeft:15,
		height:1,
		marginTop:5
	}
});