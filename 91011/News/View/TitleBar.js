import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

export default class TitleBar extends Component{
	constructor(props){
		super(props);
		//标题数组
		this.dataArray = [
			"社会新闻","国内新闻","国际新闻","娱乐要闻","体育新闻",
			"NBA新闻","足球要闻","科技新闻","创业新闻","苹果新闻",
			"军事新闻","移动互联","旅游资讯","健康知识","奇闻异事",
			"美女图片","VR科技","IT资讯"
		];
		//用来标题用户选中的标题
		let selecteds = new Array();
		for(let i=0;i<this.dataArray.length;i++){
			if (i===0) {
				selecteds.push("rgb(0,0,0)");
			}else{
				selecteds.push("rgb(111,111,111)");
			}
		}
		this.state={
			selected:selecteds,
		};
		this.selectedIndex = 0;
	}
	render(){
		return(
			<ScrollView style={titleBarStyles.bar} horizontal={true}
			showsHorizontalScrollIndicator={false} ref={"scrollView"}>
				{this.createTips()}
			</ScrollView>
		);
	}
	createTips(){
		let tipsArray = new Array();
		for (var i = 0; i < this.dataArray.length; i++) {
			//这里的index必须使用let声明，var会产生变量提升
			let index = i;
			let element = (<Text
				onPress={()=>{
					this.selected(index);
					if (index<this.dataArray.length-4) {
						this.refs.scrollView.scrollTo({x:75*index,animated:true});
					}else{
						this.refs.scrollView.scrollToEnd({animated: true});
					}
					//进行联动
					this.props.click(index);
				}}
			 key={index} style={[titleBarStyles.text,{color:this.state.selected[index]}]}>{this.dataArray[i]}</Text>);
			tipsArray.push(element);
		}
		return tipsArray;
	}
	selected(index){
		let selecteds = new Array();
		for(let i=0;i<this.dataArray.length;i++){
			if (i===index) {
				selecteds.push("rgb(0,0,0)");
			}else{
				selecteds.push("rgb(111,111,111)");
			}
		}
		this.selectedIndex = index;
		this.setState({
			selected:selecteds
		});
		if (index<this.dataArray.length-4) {
			this.refs.scrollView.scrollTo({x:75*index,animated:true});
		}else{
			this.refs.scrollView.scrollToEnd({animated: true});
		}
	}
}

let titleBarStyles = StyleSheet.create({
	bar:{
		maxHeight:30,
		minHeight:30,
		backgroundColor:'rgb(222,222,222)'
	},
	text:{
		height:30,
		marginLeft:10,
		marginRight:10,
		lineHeight:28,
		color:'rgb(111,111,111)'
	},
});