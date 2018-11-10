/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import NetTool from './net/NetTool';
import ArticleView from './view/ArticleView';
import { Navigator } from 'react-native-deprecated-custom-components'
import ArticleDetail from './view/ArticleDetail';
export default class WXHot extends Component {
  constructor(props){
    super(props);
    this.netTool = new NetTool();
    this.state={
      data:new Array() 
    };
    this.page = 1;
    this.getArticle();
  }
  render() {
    return (
      <Navigator initialRoute={{title:'微信热门推荐',index:0}} 
      renderScene={(route,navigator)=>{
        if (route.index==0) {
          return(
           <View style={styles.container}>
             <View style={styles.navigation}>
               <Text style={styles.titleStyle}>{route.title}</Text>
             </View>
             <ArticleView data={this.state.data} goDetails={(item)=>{
                navigator.push({
                    title:item.description,
                    index:route.index+1,
                    item:item
                  });
             }}
             refresh={(callback)=>{
                this.page=1;
                this.call = callback;
                this.getArticle();
             }}
             loadMore={()=>{
                this.getArticle();
             }}/>
           </View>
         );
        }else{
          return(
           <View style={styles.container}>
             <View style={styles.navigation}>
               <Text style={styles.detailTitle}>{route.title}</Text>
               <View style={styles.button}>
                 <Button title="返回" onPress={()=>{
                  navigator.pop();
               }}/>
               </View>
               
             </View>
             <ArticleDetail uri={route.item.url}/>
           </View>
          );
        }
      }}/>
    );
  }
  getArticle(){
    this.netTool.getArticle(this.page,(data)=>{
        let oldData = new Array();
        if (this.page==1) {
            
        }else{
          oldData = this.state.data;
        }
        this.setState({
          data:oldData.concat(data.newslist)
        });
        this.page++;
        if (this.call) {
          this.call();
        }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navigation:{
    height:64,
    backgroundColor:'purple',
  },
  titleStyle:{
    color:'white',
    fontSize:22,
    justifyContent:'center',
    alignSelf:'center',
    lineHeight:60
  },
  detailTitle:{
    position:'absolute',
    color:'white',
    fontSize:17,
    alignSelf:'center',
    lineHeight:60,
    textAlign:'center'
  },
  button:{
    position:'relative',
    width:60,
    height:30,
    marginTop:15,
    marginLeft:15,
  }
});

AppRegistry.registerComponent('WXHot', () => WXHot);
