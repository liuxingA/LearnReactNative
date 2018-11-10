import React,{Component} from 'react';
import {StatusBar,Button,View} from 'react-native';
export default class StatusBarDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			hidden:false
		}
	}
	render(){
		return(
			<View>
			<StatusBar ref="status"
			hidden={this.state.hidden}
			animated={true}
			backgroundColor='red'
			translucent={true}
			barStyle={'dark-content'}
			showHideTransition={'slide'}/>
			<Button title="button"
			style={{top:100}}
			onPress={()=>{
				this.setState({
						hidden:!(this.refs.status.props.hidden)
					});
				console.log(StatusBar.currentHeight);
			}}/>
			</View>
		);
	}
}
