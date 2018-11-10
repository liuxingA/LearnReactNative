import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Text,Image} from 'react-native';
export default class TouchableWithoutFeedbackDemo extends Component{
    render(){
        return(
            <View style={{top:100,left:100}}>
                <TouchableWithoutFeedback
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
               </TouchableWithoutFeedback>
           </View>
     );
   }
}
