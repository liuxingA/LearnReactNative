import React, { Component } from 'react';
import {Button,View,AsyncStorage} from 'react-native';
export default class AsyncStorageDemo extends Component{
	render(){
		return(
			<View>
				<Button title="SetItem" onPress={()=>{
					AsyncStorage.setItem("name","jaki",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="GetItem" onPress={()=>{
					AsyncStorage.getItem("name",(error,result)=>{
						console.log(error,result);
					});
				}}/>
				<Button title="RemoveItem" onPress={()=>{
					AsyncStorage.removeItem("name",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="MergeAdd" onPress={()=>{
					AsyncStorage.setItem("merge","{\"name\":\"jaki\"}",(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="MergeGet" onPress={()=>{
					AsyncStorage.getItem("merge",(error,result)=>{
						console.log(error,result);
					});
				}}/>
				<Button title="Merge" onPress={()=>{
					AsyncStorage.mergeItem("merge","{\"age\":25}",(error,result)=>{
						console.log(error,result);
					});
				}}/>
				<Button title="Clear" onPress={()=>{
					AsyncStorage.clear((error)=>{
						console.log(error);
					});
				}}/>
				<Button title="GetAllKeys" onPress={()=>{
					AsyncStorage.getAllKeys((error,results)=>{
						console.log(results);
					});
				}}/>
				<Button title="mutiSet" onPress={()=>{
					AsyncStorage.multiSet([["one","1"],["two","2"]],(error)=>{
						console.log(error);
					});
				}}/>
				<Button title="mutiGet" onPress={()=>{
					AsyncStorage.multiGet(["one","two"],(error,results)=>{
						console.log(error,results);
					});
				}}/>
				<Button title="mutiRemove" onPress={()=>{
					AsyncStorage.multiRemove(["one","two"],(error)=>{
						console.log(error);
					});
				}}/>
			</View>
		);
	}
}
