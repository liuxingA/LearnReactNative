import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Platform
} from 'react-native';
import NetTool from './../Net/NetTool';
import ItemView from './ItemView';

export default class PageView extends Component{
	constructor(props){
		super(props);
		this.netTool =  new NetTool();
		let dataArray = new Array();
		let refreshArray = new Array();
		for (let i = 0; i < this.netTool.apis.length; i++) {
			dataArray.push([]);
			refreshArray.push({refreshing:false,page:1});
		}
		this.state={
			dataArray:dataArray,
			refreshArray:refreshArray
		}
		this.hasLoad = false;
		this.getData(0,1);	
			
	}
	render(){
		var {height, width} = Dimensions.get('window');
		return(
			<ScrollView pagingEnabled={true}
			showsHorizontalScrollIndicator={false} style={mainStyle.pageView} horizontal={true} ref={'scrollView'}
			onMomentumScrollEnd={(param)=>{
			    let index = param.nativeEvent.contentOffset.x/width;
				this.props.scrollEnd(index);
				if (this.state.dataArray[index].length==0) {
					this.getData(index,1);
				}
			}}
			>
				{this.contentView(width)}
			</ScrollView>
		);
	}
	contentView(width){
		let views = new Array();
		for(let i=0;i<this.netTool.apis.length;i++){
			let element = (<FlatList key={i} style={{width:width}} data={this.state.dataArray[i]}
				renderItem={({item})=>{
					return(<ItemView item={item} itemClick={()=>{
							this.props.goDetail(item);
						}}/>);
				}}
			refreshing={this.state.refreshArray[i].refreshing} 
			onRefresh={()=>{
			    if (this.hasLoad) {
			    	return;
			    }
				this.state.refreshArray[i].page=1;
				this.state.refreshArray[i].refreshing=true;
				this.setState({
					refreshArray:this.state.refreshArray,
					dataArray:this.state.dataArray
				});
				this.getData(i,1);
			}}
			onEndReached={()=>{
				this.state.refreshArray[i].page+=1;
				this.getData(i,this.state.refreshArray[i].page);
			}}
			onEndReachedThreshold={0.5}/>);
			views.push(element);
		}
		return views;
	}
	getData(index,page){
		if(this.hasLoad){
			return;
		}
		this.hasLoad = true;
		this.netTool.getNewsData(index,page,(data)=>{
			let list = data.newslist;
			let array = this.state.dataArray;
			let i = 20*(page-1);
			if (list) {
				list.forEach((item)=>{
					item.key = i++;
				});
			}
			if (page==1) {
				array[index] = list;
			}else{
				array[index] = array[index].concat(list);
			}
			this.state.refreshArray[index].refreshing=false;
			this.setState({
				dataArray:array,
				refreshArray:this.state.refreshArray
			}
			);
			this.hasLoad = false;
		});
	}
	show(index){
		var {height, width} = Dimensions.get('window');
		this.refs.scrollView.scrollTo({x:index*width,animated:true});
		if (Platform.OS === 'android') {
			if (this.state.dataArray[index].length==0) {
				this.getData(index,1);
			}
		}
	}
}
let mainStyle = StyleSheet.create({
	pageView:{
		backgroundColor:'white'
	}
});