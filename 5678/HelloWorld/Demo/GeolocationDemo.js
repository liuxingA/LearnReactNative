import React, { Component } from 'react';
import {Button,View } from 'react-native';

var Geolocation = require('Geolocation');

export default class GeolocationDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Geolocation" onPress={()=>{
					Geolocation.getCurrentPosition((location)=>{
						console.log(location);
					},()=>{
						console.log("error");
					},{
						timeout:2000,
						maximumAge:100000,
					});
				}}/>
			</View>
		);
	};
} 