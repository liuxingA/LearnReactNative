import React, { Component } from 'react';

import RootView from './../View/RootView';

export default class RootController extends Component{
	render(){
		return (<RootView controller={this} ref="rootView"/>);
	}
	change(){
		if (this.refs.rootView.isDollarToRMB) {
			this.refs.rootView.exchange(false);
		}else{
			this.refs.rootView.exchange(true);
		}
	}
	click(title){
		if (title==="0"||title==="1"||title==="2"||title==="3"||title==="4"
			||title==="5"||title==="6"||title==="7"||title==="8"||title==="9"||title===".") {
			this.refs.rootView.inputNum(title);
		}else if(title==="delete"){
			this.refs.rootView.delete();
		}else if(title==="C"){
			this.refs.rootView.clear();
		}else if(title==="-"){
			this.refs.rootView.sub();
		}else if(title==="+"){
			this.refs.rootView.add();
		}else if(title==="="){
			this.refs.rootView.rate();
		}
	}
}