import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

export default class NumButton extends Component{
	render(){
		if (this.props.model === "text") {
			return(
				<TouchableHighlight style={[this.props.style,numberStyle.container]} onPress={()=>{
					this.props.controller.click(this.props.title);
				}}>
					<Text style={numberStyle.text}>{this.props.title}</Text>
				</TouchableHighlight>
			);
		}else{
			return(
				<TouchableHighlight style={[this.props.style,numberStyle.container]} onPress={()=>{
					this.props.controller.click(this.props.title);
				}}>
					<View style={numberStyle.imageView}>
						<Image style={numberStyle.imageStyle} source={require("../src/delete.png")}/>
					</View>
				</TouchableHighlight>
			);			
		}
	}
}

let numberStyle = StyleSheet.create({
	container:{
		flexDirection:'row'
	},
	text:{
		color:"white",
		textAlign:'center',
		flex:1,
		alignSelf:'center',
		fontSize:27
	},
	imageView:{
		flexDirection:'row',
		flex:1,
		justifyContent:'center'
	},
	imageStyle:{
		alignSelf:'center',
	}
});