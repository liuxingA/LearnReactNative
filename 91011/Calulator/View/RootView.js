import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
import NumButton from './NumButton';
const rate = 6.7;
export default class RootView extends Component{
	isDollarToRMB = true;

	exchange(isDaller){
		if (!isDaller) {
			this.setState({
				topTitle:"从人民币",
				bottomTitle:"到美元",
				topNum:"0$",
				bottomNum:"0￥",
			});
		}
		else{
			this.setState({
				topTitle:"从美元",
				bottomTitle:"到人民币",
				topNum:"0$",
				bottomNum:"0￥",
			});
		}
		this.isDollarToRMB = isDaller;
	}

	inputNum(title){
		let str = this.state.topNum.slice(0,-1);
		if (title===".") {
			if (str.indexOf(".")===-1) {
				if (this.isDollarToRMB) {
					this.setState({
						topNum:Number(str)+title+"$",
					});
				}else{
					this.setState({
						topNum:Number(str)+title+"￥",
					});
				}	
			}else{
				return;
			}
		}else{
			if (this.isDollarToRMB) {
				this.setState({
					topNum:Number(str+title)+"$",
				});
			}else{
				this.setState({
					topNum:Number(str+title)+"￥",
				});
			}
		}

	}

	delete(){
		let str = this.state.topNum.slice(0,-1);
		if (str.length===1) {
			if (this.isDollarToRMB) {
				this.setState({
					topNum:"0$",
				});
			}else{
				this.setState({
					topNum:"0￥",
				});
			}
		}else{
			if (this.isDollarToRMB) {
				this.setState({
					topNum:str.slice(0,-1)+"$",
				});
			}else{
				this.setState({
					topNum:str.slice(0,-1)+"￥",
				});
			}		
		}
	}

	clear(){
		this.setState({
			topNum:"0$",
			bottomNum:"0￥",
		});
	}
	
	sub(){
		let str = this.state.topNum.slice(0,-1);
		if (Number(str)<1) {
			return;
		}else{
			if (this.isDollarToRMB) {
				this.setState({
					topNum:(Number(str)-1).toFixed(2)+"$",
				});
			}else{
				this.setState({
					topNum:Number(str).toFixed(2)-1+"￥",
				});
			}		
		}
	}

	add(){
		let str = this.state.topNum.slice(0,-1);
		if (this.isDollarToRMB) {
			this.setState({
				topNum:(Number(str)+1).toFixed(2)+"$",
			});
		}else{
			this.setState({
				topNum:(Number(str)+1).toFixed(2)+"￥",
			});
		}		
	}

	rate(){
		let str = this.state.topNum.slice(0,-1);
		if (this.isDollarToRMB) {
			this.setState({
				bottomNum:(Number(str)*rate).toFixed(2)+"￥",
			});
		}else{
			this.setState({
				bottomNum:(Number(str)/rate).toFixed(2)+"$",
			});
		}	
	}

	constructor(props){
		super(props);
		this.state = {
			topTitle:"从美元",
			topNum:"0$",
			bottomTitle:"到人民币",
			bottomNum:"0￥",
			rootViewStyle:rootViewStyle1,
			lineViewHeight:25
		};
		let titles = ["1","2","3","delete","4","5","6","0","7","8","9",".","C","-","+","="];
		let array = new Array();
		for (var i = 1; i <= 16; i++) {
			let element;
			if (i==4) {
				element = (<NumButton style={this.state.rootViewStyle.buttonStyle} key={i} title={titles[i-1]} model="image" controller={this.props.controller} />);
			}else if(i==13||i==16){
				element = (<NumButton style={[this.state.rootViewStyle.buttonStyle,{backgroundColor:"rgb(234,86,37)"}]} key={i} title={titles[i-1]} model="text" controller={this.props.controller} />);
			}
			else{
				element = (<NumButton style={this.state.rootViewStyle.buttonStyle} key={i} title={titles[i-1]} model="text" controller={this.props.controller} />);
			}
			array.push(element);
		}
		this.buttons = array;


	}
	render(){
		return(
			<View style={this.state.rootViewStyle.rootView} onLayout={this._onLayout}>
				<View style={this.state.rootViewStyle.screenView}>
					<Text style={this.state.rootViewStyle.titleStyle}>{this.state.topTitle}</Text>
					<Text style={this.state.rootViewStyle.numberStyle}>{this.state.topNum}</Text>
					<View style={this.state.rootViewStyle.exchangeView}>
						<TouchableHighlight underlayColor="rgb(234,86,37)" onPress={()=>{
							this.props.controller.change();
						}}>
							<Image style={this.state.rootViewStyle.image} source={require("../src/exchange.png")}/>
						</TouchableHighlight>
						<View style={this.state.rootViewStyle.lineView}></View>
					</View>
					<Text style={[this.state.rootViewStyle.titleStyle,{marginTop:5}]}>{this.state.bottomTitle}</Text>
					<Text style={this.state.rootViewStyle.numberStyle}>{this.state.bottomNum}</Text>
				</View>
				<View style={this.state.rootViewStyle.keyboardView}>
					<View style={this.state.rootViewStyle.rowView}>
						{
							this.buttons.slice(0,4)
						}
					</View>
					<View style={this.state.rootViewStyle.rowView}>
						{
							this. buttons.slice(4,8)
						}
					</View>
					<View style={this.state.rootViewStyle.rowView}>
						{
							this.buttons.slice(8,12)
						}
					</View>
					<View style={this.state.rootViewStyle.rowView}>
						{
							this.buttons.slice(12,16)
						}
					</View>
				</View>
			</View>
		);
	}
	_onLayout=()=>{
		let {width,height} = Dimensions.get("window");
		if (width>height) {
			this.setState({
				rootViewStyle:rootViewStyle2,
				lineViewHeight:0
			});
		}else{
			this.setState({
				rootViewStyle:rootViewStyle1,
				lineViewHeight:25
			});
		}
	}
}

let rootViewStyle1 = StyleSheet.create({
	screenView:{
		backgroundColor:"rgb(234,86,37)",
		flex:1
	},
	keyboardView:{
		backgroundColor:'rgb(38,41,42)',
		flex:2
	},
	rootView:{
		flex:1
	},
	titleStyle:{
		marginRight:15,
		fontSize:17,
		textAlign:'right',
		color:"white",
		marginTop:25
	},
	numberStyle:{
		fontSize:30,
		textAlign:'right',
		marginRight:15,
		marginTop:5,
		color:'white'
	},
	exchangeView:{
		height:20,
		flexDirection:'row'
	},
	image:{
		width:18,
		height:18,
		marginTop:1,
		marginLeft:100,
	},
	lineView:{
		height:1,
		backgroundColor:'white',
		flex:1,
		marginTop:9,
		marginLeft:20
	},
	rowView:{
		flex:1,
		flexDirection:'row'
	},
	buttonStyle:{
		flex:1,
	}
});

let rootViewStyle2 = StyleSheet.create({
	screenView:{
		backgroundColor:"rgb(234,86,37)",
		flex:3
	},
	keyboardView:{
		backgroundColor:'rgb(38,41,42)',
		flex:5
	},
	rootView:{
		flex:1
	},
	titleStyle:{
		marginRight:15,
		fontSize:13,
		textAlign:'right',
		color:"white",
		marginTop:5
	},
	numberStyle:{
		fontSize:22,
		textAlign:'right',
		marginRight:15,
		marginTop:2,
		color:'white'
	},
	exchangeView:{
		height:20,
		flexDirection:'row'
	},
	image:{
		width:14,
		height:14,
		marginTop:1,
		marginLeft:300,
	},
	lineView:{
		height:1,
		backgroundColor:'white',
		flex:1,
		marginTop:7,
		marginLeft:20
	},
	rowView:{
		flex:1,
		flexDirection:'row'
	},
	buttonStyle:{
		flex:1,
	}
});






