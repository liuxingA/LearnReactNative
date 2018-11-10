import React, {
	Component
} from 'react';
import {
	View,
	PanResponder,
	Text
} from 'react-native';

export default class PanResponderDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: '',
			pos: '',
		};
		this.myPanResponder = PanResponder.create({
			//要求成为响应者：
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderTerminationRequest: (evt, gestureState) => true,

			//响应对应事件后的处理:
			onPanResponderGrant: (evt, gestureState) => {
				this.state.eventName = '触摸开始';
				this.forceUpdate();
			},
			onPanResponderMove: (evt, gestureState) => {
				var _pos = 'x:' + gestureState.moveX + ',y:' + gestureState.moveY;
				this.setState({
					eventName: '移动',
					pos: _pos
				});
			},
			onPanResponderRelease: (evt, gestureState) => {
				this.setState({
					eventName: '抬手'
				});
			},
			onPanResponderTerminate: (evt, gestureState) => {
				this.setState({
					eventName: '另一个组件已经成为了新的响应者'
				})
			},
		});
	}
	render() {
		return ( 
		<View style={{flex:1}} {...this.myPanResponder.panHandlers}>
		<Text style={{top:100,textAlign:'center'}}>eventName:{this.state.eventName}|{this.state.pos}</Text> 
		</View>);
	}
}