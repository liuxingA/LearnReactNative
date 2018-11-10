/*
文本控件Text
*/
import React,{Component} from 'react';
import {Text} from 'react-native';
export default class TextDemo extends Component {
	render(){
		return (
			//Text控件
			<Text style={[style,base]}>Hello Friend!</Text>
		);
	}	
};
//公共样式
var base = {
    //设置控件距离上方100的单位
	top:100
};
//Text组件特有的样式
var style = {
    //设置文字颜色
	color:'red',
	//设置字体
	fontFamily:'Cochin',
	//设置字号
	fontSize:24,
	//设置字体风格
	fontStyle:'italic',
	//设置字体粗细
	fontWeight:'bold',
	//设置行高
	lineHeight:50,
	//设置文字对其模式
	textAlign:'center',
	//设置文字修饰风格
	textDecorationLine:'underline',
	//设置文字阴影颜色
	textShadowColor:'green',
	//设置阴影偏移
	textShadowOffset:{
		width:5,
		height:5
	}
};
//iOS平台特有的样式
var iosStyle = {
	//设置文字变体
	fontVariant:['small-caps'],
	//设置字符间距
	letterSpacing:10,
	//设置修饰线颜色
	textDecorationColor:'blue',
	//设置修饰风格
	textDecorationStyle:'double',
	//设置书写方向
	writingDirection:'rtl'
}
//Android平台特有的样式
var androidStyle = {
    //设置是否有内间距
	includeFontPadding:false,
	//设置水平方向的对齐模式
	textAlignVertical:'center'
}
