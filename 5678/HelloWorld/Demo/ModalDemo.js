import React,{Component} from 'react';
import {Modal,Text,View,Button} from 'react-native';
export default class ModalDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			hidden:true
		}
	}
	render(){
		return(
			<View>
			<Modal visible={!this.state.hidden}
			transparent={false}
			animationType={'slide'}
			onRequestClose={()=>{
				console.log('close');
			}}
			onShow={()=>{
				console.log('onShow');
			}}
	supportedOrientations={['portrait','portrait-upside-down','landscape','landscape-left', 'landscape-right']}
			onOrientationChange={()=>{
				console.log("onOrientationChange");
			}}
			hardwareAccelerated={true}
			>
				<Text style={{top:150,textAlign:'center'}}>I'm a Modal!</Text>
				<View style={{top:180}}>
					<Button title="Close"
					onPress={()=>{
						this.setState({
							hidden:true
							});
					}}/>
				</View>
			</Modal>
			<View style={{top:30}}>
				<Text style={{textAlign:'center',fontSize:22}}>Hello Modal!</Text>
				<Button title="Show Modal"
				onPress={()=>{
					this.setState({
						hidden:false
						});
				}}/>
			</View>
			</View>
		);
	}
}
