import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

export default class NetDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Fetch" onPress={()=>{
					fetch("https://facebook.github.io/react-native/movies.json",{
							method:"GET",
							headers:{
								name:"PK"
							}
						}).then((response)=>{
							console.log(response);
							return response.json();
						}).then((json)=>{
							console.log(json);
						});
				}} />
				<Button title="ajax" onPress={()=>{
					var request = new XMLHttpRequest();
					request.responseType="json";
					request.onreadystatechange = () => {
						if (request.readyState!==4) {
							return;
						}
  						if (request.status === 200) {
    						console.log('success', request.response);
  						} else {
  					  		console.warn('error');
  						}

					};
					request.open('GET', "https://facebook.github.io/react-native/movies.json");
					request.send();
				}}/>
			</View>
		);
	}
}