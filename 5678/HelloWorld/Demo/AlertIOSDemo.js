import React,{Component} from 'react';
import {View,Button,AlertIOS} from 'react-native';
export default class AlertDemo extends Component{
	render(){
		return(
			<View>
				<Button height={30} title="普通的警告框"
				onPress={()=>{
					AlertIOS.alert(
						"警告",
						"天干物燥，小心火烛",
						[
							{text: '进入', onPress: () => console.log('come on')},
    						{text: '取消', onPress: () => console.log('cancel'), style: 'cancel'},
    						{text: 'OK', onPress: () => console.log('OK Pressed')},
						]
					);
				}}/>
				<Button height={30} title="带文本框的警告框"
				onPress={()=>{
					AlertIOS.prompt(
						"警告",
						"天干物燥，小心火烛",
						(textObj)=>{
							console.log(textObj);
						},
						'login-password',
						'www.abcd@163.com',
						'email-address'
					);
				}}/>
			</View>
		);
	}
}
