import React, { Component, PropTypes } from 'react';
import { NativeModules,requireNativeComponent } from 'react-native';


export var ToolsManager = NativeModules.RNToolsManager;
var FView = requireNativeComponent('FlashView',FlashView);
var FViewManager = NativeModules.FlashView;
export class FlashView extends Component{
	// static propTypes = {
	//     /*
	// 	* 设置文本
	//     */
	// 	text:PropTypes.string,
	// 	onPress:PropTypes.func
	// }
	render(){
		return(
			<FView {...this.props} onChange={this.props.onPress}/> 
		);
	}
	start=()=>{
		FViewManager.start();
	}
	stop=()=>{
		FViewManager.stop();
	}
}