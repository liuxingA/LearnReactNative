import React,{Component} from 'react';
import {ScrollView,Text} from 'react-native';
export default class ScrollViewDemo extends Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Text style={textStyle}>
                    Hello world!
                </Text>
                <Text style={textStyle}>
                    Hello world!
                </Text>
                <Text style={textStyle}>
                    Hello world!
                </Text>
                <Text style={textStyle}>
                    Hello world!
                </Text>
                <Text style={textStyle}>
                     Hello world!
                 </Text>
             </ScrollView>
         );
    }
}
let textStyle = {
    backgroundColor:'red',
    fontSize:40, 
    textAlign:'center',
    marginTop:100
}
