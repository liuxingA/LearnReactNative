import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ArticleItem extends Component{
	render(){
		return(
			<TouchableOpacity onPress={this.props.clickItem}>
				<View>
					<Text style={itemStyle.titleStyle}>{this.props.data.description}</Text>
					<View style={itemStyle.contentView}>
						<Image source={{uri:this.props.data.picUrl}} style={itemStyle.imageStyle}/>
						<Text style={itemStyle.contentText}>{this.props.data.title}</Text>
						<Text></Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

let itemStyle=StyleSheet.create({
	imageStyle:{
		width:80,
		height:120,
		marginLeft:15,
		marginTop:10,
		marginBottom:10
	},
	titleStyle:{
		marginTop:15,
		marginLeft:15,
		fontSize:17
	},
	contentView:{
		flex:1,
		flexDirection:'row'
	},
	contentText:{
		flex:1,
		fontSize:15,
		marginTop:15,
		marginLeft:10,
		marginRight:15
	}
});