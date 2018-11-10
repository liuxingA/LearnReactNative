import React,{Component} from 'react';
import {FlatList,Text,View} from 'react-native';
export default class FlatListDemo extends Component{
    constructor(props){
    super(props);
	this.dataSource = [
	{
		key:1,
	   value:"数据"
	},
	{
	   key:2,
	   value:"数据"
    },
	{
		key:3,
		value:"数据"
	},
	{
		key:4,
		value:"数据"
	},
	{
		key:5,
		value:"数据"
	}
	];
	}
	render(){
		return(
			<FlatList data={this.dataSource}
			renderItem={(item)=>{
				return(<Text style={{marginLeft:20,backgroundColor:'red',marginTop:10,textAlign:'center',lineHeight:30,fontSize:22}}>item</Text>);
			}}
			ItemSeparatorComponent={()=>{
				return(
				<View style={{height:2,backgroundColor:'black'}}></View>
				);
			}}
			ListFooterComponent={()=>{
				return(
				<Text style={{backgroundColor:'blue',textAlign:'center',lineHeight:20,fontSize:18}}>FOOTER</Text>
			);
			}}
			ListHeaderComponent={()=>{
				return(
				<Text style={{backgroundColor:'blue',textAlign:'center',lineHeight:20,fontSize:18}}>HEADER</Text>
				);
			}}
			columnWrapperStyle={{backgroundColor:'green'}}
			numColumns={3}
			getItemLayout={(dataArray,index)=>{
				return {length:50,offset:52*index,index:index};
			}}
		/>);
	}
}
