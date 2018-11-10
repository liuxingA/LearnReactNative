import React,{Component} from 'react';
import {DatePickerIOS} from 'react-native';
export default class DatePickerIOSDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			date:new Date()
		}
	}
	render(){
		return(
			<DatePickerIOS style={{width:300,height:200,left:10,top:30}}
			date={this.state.date}
			mode={'time'}
			onDateChange={(newDate)=>{
				this.setState({
					date:newDate
				});
			}}/>
		);
	}
}
