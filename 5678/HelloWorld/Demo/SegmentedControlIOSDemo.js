import React,{Component} from 'react';
import {SegmentedControlIOS} from 'react-native';
export default class SegmentedControlIOSDemo extends Component{
	render(){
		return(
			<SegmentedControlIOS
			style={{top:100}}
			onChange={()=>{
				console.log("onChange");
			}}
			onValueChange={(value)=>{
				console.log(value);
			}}
			selectedIndex={0}
			tintColor='red'
			values={['one','two','three']}/>
		);
	}
}
