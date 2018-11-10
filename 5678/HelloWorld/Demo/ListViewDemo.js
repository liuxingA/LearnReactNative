import React,{Component} from 'react';
import {ListView,Text} from 'react-native';
export default class ListViewDemo extends Component{
    constructor(props){
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!==r2,
            sectionHeaderHasChanged:(s1,s2)=>s1!==s2,
            getRowData:(data,sID,rID)=>{
                console.log(data,sID,rID);
                return data[sID][rID];
            },
            getSectionHeaderData:(data,sID)=>{
                return "分区"+sID;
            }
        });
        this.dataSource=this.dataSource.cloneWithRows([
            "数据","数据",
            "数据","数据",
            "数据","数据"
        ])
    }
    render(){
        return(
            <ListView dataSource={this.dataSource}
             renderRow={(rowData) => {
                 return(<Text style={{lineHeight:30,marginTop:30,backgroundColor:'red',textAlign:'center'}}>{rowData}</Text>);
             }}
             renderSectionHeader={(headerData,sID)=>{
                 return(<Text style={{lineHeight:30,marginTop:30,backgroundColor:'green',textAlign:'center'}}
onPress={()=>{
    let rows = this.dataSource.getRowCount();
    let secs = this.dataSource.getRowAndSectionCount();
    console.log(rows,secs);
}}>{headerData}</Text>);
            }}/>
        );
    }
}
