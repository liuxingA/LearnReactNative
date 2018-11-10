import React,{Component} from 'react';
import {View,Button,Alert} from 'react-native';
export default class AlertDemo extends Component{
	render(){
		return(
			<View>
				<Button height={30} title="ALERT"
				onPress={()=>{
					Alert.alert(
						"警告",
						"天干物燥，小心火烛",
						[
							{text: '进入', onPress: () => console.log('come on')},
    						{text: '取消', onPress: () => console.log('cancel'), style: 'cancel'},
    						{text: 'OK', onPress: () => console.log('OK Pressed')},
						]
					);
				}}/>
			</View>
		);
	}
}
