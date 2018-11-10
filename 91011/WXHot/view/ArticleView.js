import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';

import ArticleItem from './ArticleItem';

export default class ArticleView extends Component{
	constructor(props){
		super(props);
		this.state={
			isRefresh:false
		}
	}
	render(){
		let key = 0;
		this.props.data.forEach(function(item){
			item.key = key++;
		});
		return(
			<FlatList 
				data={this.props.data}
				renderItem={({item})=>{
					return(<ArticleItem data={item} clickItem={()=>{
							this.props.goDetails(item);
						}}/>);
				}}
				ItemSeparatorComponent={()=>{
					return(<View style={articleViewStyle.separatorLine}></View>);
				}}
				onRefresh={()=>{
					if (!this.state.isRefresh) {
					this.setState({
						isRefresh:true
					});
					this.props.refresh(()=>{
						this.setState({
							isRefresh:false
						});
					});
					}
				}}
				refreshing={this.state.isRefresh}
				onEndReached={()=>{
					this.props.loadMore();
				}}
			/>
		);
	}
}

let articleViewStyle = StyleSheet.create({
	separatorLine:{
		height:1,
		backgroundColor:'gray',
		marginLeft:15
	}
});