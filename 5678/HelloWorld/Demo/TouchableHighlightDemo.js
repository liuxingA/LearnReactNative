import React,{Component} from 'react';
import {View,TouchableHighlight,Text,Image} from 'react-native';
export default class TouchableHighlightDemo extends Component{
    render(){
        return(
            <View style={{top:100,left:100}}>
                <TouchableHighlight
                 onLongPress={()=>{
                     console.log("long press");
                 }}
                 onPress={()=>{
                     console.log("press");
                 }}
                 onPressIn={()=>{
                     console.log("press in");
                 }}
                 onPressOut={()=>{
                     console.log("press out");
                 }}>
               <View>
                   <Image source={require('./../source/image.png')}
                    style={{width:50,height:50}}/>
                   <Text>Button</Text>
               </View>
              </TouchableHighlight>
          </View>
        );
    }
}
