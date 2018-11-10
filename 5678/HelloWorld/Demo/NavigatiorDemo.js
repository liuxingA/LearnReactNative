// import React,{Component} from 'react';
// import { Navigator } from 'react-native-deprecated-custom-components';	
// export default class NavigatorDemo extends Component{
// 	render(){
// 		return(
// 			<Navigator initialRoute={{name:'first',index:0}}
// 			renderScene={(route,navigatior)=>{
// 				return this.renderScene(route,navigatior);
// 			}}/>
// 		);
// 	}
// 	renderScene(route,navigatior){
// 		return(
// 			<View style={{flex:1,backgroundColor:'red'}}>
// 				<Text style={{marginTop:30,fontSize:20,textAlign:'center'}}>{route.name}</Text>
// 				<Button title="push" onPress={()=>{
// 					navigatior.push({name:'Scene'+(route.index+1),index:route.index+1});
// 				}}/>
// 				<Button title="pop" onPress={()=>{
// 					if (route.index>0) {
// 						navigatior.pop();
// 					}		
// 				}}/>
// 			</View>
// 		);
// 	}
// }
