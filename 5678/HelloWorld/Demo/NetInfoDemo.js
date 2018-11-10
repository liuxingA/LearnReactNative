import React, { Component } from 'react';
import {Button,View,NetInfo } from 'react-native';

export default class NetInfoDemo extends Component{
	render(){
		return(
			<View>
				<Button title="NetInfo" onPress={()=>{
					NetInfo.fetch().then((info)=>{
						console.log(info);
					});
				}}/>
			</View>
		);
	}
}