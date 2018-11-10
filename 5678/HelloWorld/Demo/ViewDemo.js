import React,{Component} from 'react';
import {View} from 'react-native';
export default class ViewDemo extends Component{
    render(){
        return(
            <View style={baseStyle}>    
            </View>
        );
    }
}
let baseStyle = {
    //布局属性
    width:200,
    height:200,
    //样式属性
    backfaceVisibility:'hidden',
    backgroundColor:'red',
    borderTopColor:'green',
    borderRightColor:'blue',
    borderBottomColor:'black',
    borderLeftColor:'yellow',
    borderTopWidth:10,
    borderBottomWidth:5,
    borderLeftWidth:20,
    borderRightWidth:2,
    borderStyle:'solid',
    opacity:0.9,
    overflow:'visible'
}
