import React,{Component} from 'react';
import {DrawerLayoutAndroid,View,Text} from 'react-native';
export default class DrawerLayoutAndroidDemo extends Component{
	render(){
		return(
		<DrawerLayoutAndroid
		drawerWidth={150}
		drawerPosition={DrawerLayoutAndroid.positions.Left}
		renderNavigationView={()=>{
			return(
				<View style={{flex: 1, backgroundColor: '#fff'}}>
      				<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>抽屉视图</Text>
    			</View>
			);
		}}>
			<View style={{flex: 1, alignItems: 'center'}}>
        		<Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        		<Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      		</View>
		</DrawerLayoutAndroid>
		);
	}
}
