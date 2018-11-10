import {
	AsyncStorage
} from 'react-native';

export default class DataManager {
	static getData(callback){
		AsyncStorage.getItem("data",(error,result)=>{
			if (!error) {
				result=result?result:"";
				let array = result.split('@@');
				callback(array);
			}
		});
	}

	static addCollection(url){
		this.getData((array)=>{
			array.push(url);
			let string = array.join('@@');
			AsyncStorage.setItem('data',string);
		});
	}
}