import React, { Component } from 'react';
import {
	WebView
} from 'react-native';

export default class DetailPage extends Component{
	render(){
		let uri =  this.props.uri;
		return(
			<WebView source={{uri:uri}}/>
		);
	}
}