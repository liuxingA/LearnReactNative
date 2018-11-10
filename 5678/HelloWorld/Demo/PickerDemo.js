import React,{Component} from 'react';
import {Picker} from 'react-native';
export default class PickerDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			value:1
		}
	}
	render(){
		return(
			<Picker style={{top:100,marginLeft:30,marginRight:30,height:100}}
			onValueChange={(itemValue,itemPosition)=>{
				console.log(itemValue,itemPosition);
				this.setState({
					value:itemPosition
					});
			}}
			selectedValue={this.state.value}
			mode={'dialog'}
			itemStyle={{fontSize:24}} ref='picker'>
				<Picker.Item label="iOS" value={0} color='red'/>
				<Picker.Item label="Android" value={1} color='blue'/>
				<Picker.Item label="Web" value={2} color='green'/>
			</Picker>
		);
	}
}
