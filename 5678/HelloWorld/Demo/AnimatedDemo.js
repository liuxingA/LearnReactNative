import React, { Component } from 'react';
import {Button,View,Animated,Easing,LayoutAnimation,UIManager} from 'react-native';
import CustomView from './CustomView';
//默认支持动画的组件有View ScrollView Text Button
export class AnimatedValueDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.Value(10)
		}
		this.state.animated.addListener((state)=>{
				console.log(state);
		});
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:this.state.animated,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					Animated.timing(this.state.animated,{
						toValue:300,
						duration:3000,
						delay:1000,
						easing:Easing.bounce
					}).start();
				}}/>
				<Button title="UnShow" onPress={()=>{
					Animated.timing(this.state.animated,{
						toValue:10,
						duration:3000,
						delay:1000,
						easing:Easing.bounce
					}).start();
				}}/>
			</View>
		);
	}
}

export class AnimatedValueXYDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.ValueXY({x:10,y:10})
		}
		this.state.animated.addListener((state)=>{
				console.log(state);
		});
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:this.state.animated.x,width:this.state.animated.y,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					Animated.decay(
						this.state.animated,
						{
							velocity:{x:0.3,y:0.3},
							deceleration:0.997
						}
					).start();
				}}/>
			</View>
		);
	}
}

export class SpringAnimatedValueXYDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.ValueXY({x:10,y:10})
		}
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:this.state.animated.x,width:this.state.animated.y,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					Animated.spring(this.state.animated,{
						toValue:{x:100,y:100},
						bounciness:20
						}).start();
				}}/>
			</View>
		);
	}
}

export class InterpolationAnimatedValueDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.Value(10)
		};
		this.bindAnimated = new Animated.Interpolation(this.state.animated,{
			inputRange:[10,50,70,100],
			outputRange:[10,100,50,150],
		});
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:this.bindAnimated,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					Animated.timing(this.state.animated,{
						toValue:100,
						duration:3000,
					}).start();
				}}/>
			</View>
		);
	}
}

export class CalculateAnimatedValueDemo extends Component{
	constructor(props){
		super(props);
		var animated1 = this.animated1 = new Animated.Value(10);
		var animated2 = this.animated2 = new Animated.Value(100);
		this.addAnimated = Animated.add(animated1,animated2);
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:this.addAnimated,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					Animated.timing(this.animated1,{
						toValue:100,
						duration:3000,
					}).start();
					Animated.timing(this.animated2,{
						toValue:150,
						duration:3000,
					}).start();
				}}/>
			</View>
		);
	}
}

export class AnimatedGroupDemo extends Component{
	constructor(props){
		super(props);
		this.animated1 = new Animated.Value(30);
		this.animated2 = new Animated.Value(30);
		this.animated3 = new Animated.Value(30);
		
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:30,height:30,width:this.animated1,backgroundColor:'red'}}></Animated.View>
				<Animated.View style={{marginTop:10,height:30,width:this.animated2,backgroundColor:'red'}}></Animated.View>
				<Animated.View style={{marginTop:10,height:30,width:this.animated3,backgroundColor:'red'}}></Animated.View>
				<Button title="Show" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:3000,
					});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:3000,
					});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:3000,
					});
					Animated.sequence([a1,a2,Animated.delay(1000),a3]).start();
				}}/>
				<Button title="Show2" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:3000,
					});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:3000,
					});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:3000,
					});
					Animated.parallel([a1,a2,a3],{stopTogether:false}).start();
				}}/>
				<Button title="Show3" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:3000,
					});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:3000,
					});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:3000,
					});
					Animated.stagger(500,[a1,a2,a3]).start();
				}}/>
				<Button title="Show4" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:300,
					});
					Animated.loop(a1,{iterations:-1}).start();
				}}/>

			</View>
		);
	}
}
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export class LayoutAnimationDemo extends Component{
	constructor(props){
		super(props);
		this.state={
			width:100,
			height:100
		}
	}
	render(){
		return(
			<View>
				<View style={{marginTop:100,height:this.state.height,width:this.state.width,backgroundColor:'red'}}></View>
				<Button title="Show" onPress={()=>{
					LayoutAnimation.spring();
					this.setState({
						width:this.state.width+10,
						height:this.state.height+10
						});
				}}/>
			</View>
		);
	}
}



export class CustomAnimatedDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.Value(1)
		}
		this.customView = Animated.createAnimatedComponent(CustomView);
	}
	render(){
		return(
			<View>
				<this.customView alpha={this.state.animated} />
				<Button title="Show" onPress={()=>{
					Animated.timing(this.state.animated,{
						toValue:0,
						duration:3000,
					}).start();
				}}/>
			</View>
		);
	}
}



