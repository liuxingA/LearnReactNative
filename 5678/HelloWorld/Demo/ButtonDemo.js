/*
按钮控件Button
*/
import React,{Component} from 'react';
import {Button,View} from 'react-native';
export default class ButtomDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			style:{
				backgroundColor:'blue',
				flex:1
			}
		};
	}
	render(){
		return(
			<View style={this.state.style}>
				<View style={{top:100}}>
					<Button title="按钮"
					color='red'
					onPress={this.changeColor}
					disabled={false}/>
				</View>	
			</View>
		);
	}
	changeColor=()=>{
		this.setState({
			style:{
	backgroundColor:'rgb('+(Math.random()*255)+','+(Math.random()*255)+','+(Math.random()*255)+')',
				flex:1
			}
			});
	}
}

