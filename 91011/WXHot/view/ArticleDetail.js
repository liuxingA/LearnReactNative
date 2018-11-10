import React, { Component } from 'react';
import {
  WebView
} from 'react-native';

export default class ArticleDetail extends Component{
	render(){
		let uri =  this.props.uri;
		return(
			<WebView source={{uri:uri}}/>
		);
	}
}