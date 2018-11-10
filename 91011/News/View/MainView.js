import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';
import TitleBar from './TitleBar';
import PageView from './PageView';
import DetailPage from './DetailPage';
import CollectionView from './CollectionView';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class MainView extends Component{
	render(){
		return(
			<Navigator ref='navigation' initialRoute={{title:'掌上新闻',type:'root'}} renderScene={(route,navigator)=>{
					if (route.type === 'root') {
						return(
							<View style={{flex:1}}>
								<NavigationBar title={route.title} type={route.type}  goCollection={()=>{
									navigator.push({
										title:"收藏夹",
										type:'collection'										
									});
								}}/>
								<TitleBar click={this.clickTitle} ref="titleBar"/>
								<PageView ref='pageView' scrollEnd={this.scrollEnd} goDetail={(item)=>{
									navigator.push({
										title:item.description,
										type:'detail',
										uri:item.url
									});
								}}/>
							</View>
						);
					}else if(route.type==='detail'){
						return(
							<View style={{flex:1}}>
							    <NavigationBar title={route.title} type={route.type} pop={()=>{
							    	navigator.pop();
							    }} url={route.uri}/>
								<DetailPage uri={route.uri}/>
							</View>
						);
					}else if(route.type==='collection'){
						return(
						<View style={{flex:1}}>
							    <NavigationBar title={route.title} type={route.type} pop={()=>{
							    	navigator.pop();
							    }}/>
								<CollectionView goDetail={(url)=>{
									navigator.push({
										title:"来自收藏夹",
										type:'detail',
										uri:url
									});
								}}/>
						</View>
						);
					}
				}}
			/>
		);
	}

	clickTitle=(index)=>{
		this.refs.navigation.refs.pageView.show(index);
	}

	scrollEnd = (index)=>{
		this.refs.navigation.refs.titleBar.selected(index);
	}
}



