import React,{Component} from 'react';
import {View,TouchableNativeFeedback,Text,Image} from 'react-native';
export default class TouchableNativeFeedbackDemo extends Component{
    render(){
        return(
            <View style={{top:100,left:100}}>
                <TouchableNativeFeedback
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
                 }}
                 background={TouchableNativeFeedback.Ripple('red', false)}>
                     <View>
                         <Image source={require('./../source/image.png')}
                          style={{width:50,height:50}}/>
                         <Text>Button</Text>
                     </View>
                </TouchableNativeFeedback>
            </View>
         );
    }
}
