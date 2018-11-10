import React,{Component} from 'react';
import {View,Share,Button} from 'react-native';
export default class ShareDemo extends Component{
	render(){
		return(
		<View>
			<Button title="share" onPress={()=>{
				Share.share({
					message:"分享的内容",
					title:"title",
					url:"https://www.baidu.com"
				},{
					tintColor:'red',
					dialogTitle:'dialogTitle'
				}).then((action)=>{
					console.log("success",action);
				},(action)=>{
					console.log("error",action);
				});
			}}/>
		</View>
		);
	}
}
