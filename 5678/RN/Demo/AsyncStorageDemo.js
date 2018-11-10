import React, { Component } from 'react';
import {
  Button,
  View,
  AsyncStorage
} from 'react-native';

export default class AsyncStorageDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Save" onPress={()=>{
					AsyncStorage.setItem("name","Jaki",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="Get" onPress={()=>{
					AsyncStorage.getItem("name",(error,result)=>{
						console.log(error,result);
					});
				}}/>
				<Button title="Remove" onPress={()=>{
					AsyncStorage.removeItem("name",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="AddMerge" onPress={()=>{
					AsyncStorage.setItem("merge","{\"name\":\"jaki\"}",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="Merge" onPress={()=>{
					AsyncStorage.mergeItem("merge","{\"age\":24}",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="GetMerge" onPress={()=>{
					AsyncStorage.getItem("merge",(error,result)=>{
						console.log(error,result);
					});
				}}/>
				<Button title="GetAllKey" onPress={()=>{
					AsyncStorage.getAllKeys((error,keys)=>{
						console.log(error,keys);
					});
				}}/>
				<Button title="mutliSet" onPress={()=>{
					AsyncStorage.multiSet([["one","1"],["two","2"]],(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="multiGet" onPress={()=>{
					AsyncStorage.multiGet(["one","two"],(error,results)=>{
						console.log(error,results);
					});
				}}/>
				<Button title="multiRemove" onPress={()=>{
					AsyncStorage.multiRemove(["one","two"],(error,results)=>{
						console.log(error,results);
					});
				}}/>
				<Button title="clear" onPress={()=>{
					AsyncStorage.clear((error)=>{
						console.log(error);
					});
				}}/>
			</View>
		);
	}
}