import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';
var Geolocation = require('Geolocation');
export default class GeolocationDemo extends Component{
	render(){
		return(
			<View>
				<Button title="GEO" onPress={()=>{
					Geolocation.getCurrentPosition((obj)=>{
						console.log(obj);
					},()=>{
						console.log("error");
					},{
						timeout:10000,
						maximunAge:100000,
						enableHighAccuracy:false,
						distanceFiter:10
					});
				}}/>
			</View>
		);
	}
}