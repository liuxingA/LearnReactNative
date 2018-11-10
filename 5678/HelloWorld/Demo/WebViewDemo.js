import React,{Component} from 'react';
import {WebView} from 'react-native';
export default class WebViewDemo extends Component{
    render(){
        return(
            <WebView source={{uri:'https://www.baidu.com'}}
             bounces={false}
             dataDetectorTypes={['link']}
             decelerationRate={'normal'}
             domStorageEnabled={true}
             injectedJavaScript="var a = 100;"
             scalesPageToFit={true}/>
             );
   }
}
