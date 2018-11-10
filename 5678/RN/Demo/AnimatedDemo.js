import React, { Component } from 'react';
import {
  Button,
  View,
  Animated,
  Easing,
  LayoutAnimation
} from 'react-native';
import CustomAnimatedView from './CustomAnimatedView';
export default class AnimatedDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.Value(1)
		};
		this.state.animated.addListener((value)=>{
			console.log(value);
		});
	}
	render(){
		return(
			<View>
				<Animated.View style={{marginTop:100,height:this.state.animated,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.timing(
						this.state.animated,
						{
							toValue:100,
							onComplete:(obj)=>{
								console.log(obj);
							},
							duration:2000,
							delay:1000,
							easing:Easing.bounce
						}
					).start();
				}}/>
			</View>
		);
	}
}

export class AnimatedValue2DDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.ValueXY({x:10,y:10})
		};
		this.state.animated.addListener((value)=>{
			console.log(value);
		});
	}
	render(){
	return(
		<View>
			<Animated.View style={{marginTop:100,height:this.state.animated.x,width:this.state.animated.y,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.decay(
						this.state.animated,
						{
						velocity:{x:0.3,y:0.3},
						deceleration:0.997,
						}
					).start();
				}}/>
		</View>
		);
	}
}

export class SpringAnimatedDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.ValueXY({x:10,y:10})
		};
	}
	render(){
	return(
		<View>
			<Animated.View style={{marginTop:100,height:this.state.animated.x,width:this.state.animated.y,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.spring(this.state.animated,{
						toValue:{x:100,y:100},
						onComplete:()=>{
							console.log("complete");
						},
						bounciness:10
						}).start();
				}}/>
		</View>
		);
	}
}

export class InterpolationAnimatedDemo extends Component{
	constructor(props){
		super(props);
		this.state = {
			animated:new Animated.Value(10),

		};
		this.bindAnimated = new Animated.Interpolation(this.state.animated,{
					inputRange:[10,50,100],
					outputRange:[10,100,50],
					extrapolate:'identity'
				})
	}
	render(){
	return(
		<View>
			<Animated.View style={{marginTop:100,height:this.bindAnimated,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.timing(this.state.animated,{
						toValue:100,
						duration:2000
						}).start();
				}}/>
		</View>
		);
	}
}

export class AnimatedCalculateDemo extends Component{
	constructor(props){
		super(props);
		var animated1 = this.animated1 = new Animated.Value(10);
		var animated2 = this.animated2 = new Animated.Value(100);
		this.addAnimated = Animated.add(animated1,animated2);
	}
	render(){
	return(
		<View>
			<Animated.View style={{marginTop:100,height:this.addAnimated,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						}).start();
				}}/>
		</View>
		);
	}
}

export class AnimatedGroupeDemo extends Component{
	constructor(props){
		super(props);
		this.animated1 = new Animated.Value(10);
		this.animated2 = new Animated.Value(10);
		this.animated3 = new Animated.Value(10);	
	}
	render(){
	return(
		<View>
			<Animated.View style={{marginTop:100,height:30,width:this.animated1,backgroundColor:'red'}}></Animated.View>
			<Animated.View style={{marginTop:10,height:30,width:this.animated2,backgroundColor:'red'}}></Animated.View>
			<Animated.View style={{marginTop:10,height:30,width:this.animated3,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Sequence Animation" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:2000
						});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:2000
						});
					Animated.sequence([a1,a2,Animated.delay(2000),a3]).start();
				}}/>
				<Button title="Start Parallel Animation" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:2000
						});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:2000
						});
					Animated.parallel([a1,a2,a3],{stopTogether:false}).start();
				}}/>
				<Button title="Start Stagger Animation" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						});
					var a2 = Animated.timing(this.animated2,{
						toValue:100,
						duration:2000
						});
					var a3 = Animated.timing(this.animated3,{
						toValue:100,
						duration:2000
						});
					Animated.stagger(500,[a1,a2,a3]).start();
				}}/>
				<Button title="Start Loop Animation" onPress={()=>{
					var a1 = Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						});
					Animated.loop(a1,{iterations:-1}).start();
				}}/>
		</View>
		);
	}
}
export class AnimatedEventDemo extends Component{
	constructor(props){
		super(props);
		var animated1 = this.animated1 = new Animated.Value(10);
		var animated2 = this.animated2 = new Animated.Value(100);
		this.addAnimated = Animated.add(animated1,animated2);
	}
	render(){
	return(
		<View>
			<Animated.View onPanResponderMove={(move)=>{
				console.log(move);
			}} style={{marginTop:100,height:this.addAnimated,backgroundColor:'red'}}></Animated.View>
				<Button title="Start Animation" onPress={()=>{
					Animated.timing(this.animated1,{
						toValue:100,
						duration:2000
						}).start();
				}}/>
		</View>
		);
	}

}

import {
  UIManager
} from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
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
				<Button title="Start Animation" onPress={()=>{
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

export class CustomAnimationViewDemo extends Component{
	constructor(props){
		super(props);
		this.animated1 = new Animated.Value(1);
		this.aniView = Animated.createAnimatedComponent(CustomAnimatedView);
	}
	render(){
		return(
			<View>
				<this.aniView opacity={this.animated1}/>
				<Button title="Start Animation" onPress={()=>{
					Animated.timing(this.animated1,{
						toValue:0,
						duration:2000
						}).start();
				}}/>
			</View>
			
		);
	}
}

