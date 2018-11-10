import React,{Component} from 'react';
import {ActionSheetIOS,View,Button} from 'react-native';
export default class ActionSheetIOSDemo extends Component{
	render(){
		return(
			<View>
				<Button title="ActionSheet Normal" onPress={()=>{
					ActionSheetIOS.showActionSheetWithOptions({
						options:["title1","title2","title3","delete","cancel"],
						cancelButtonIndex:4,
						destructiveButtonIndex:3,
						title:"ActionSheetIOS",
						message:"message info"
						},(index)=>{
							console.log(index);
						});
				}}/>
			</View>
		);
	}
}
