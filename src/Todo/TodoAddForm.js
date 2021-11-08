import "./TodoAddForm.css"
import React from "react";


export default class TodoAddForm extends(React.Component){
    constructor(){
        super();
        this.state = {text:""}
        this.idInc = 1
    }
    itemTitle = (e)=>{

       this.setState({text:e.target.value})
    }
    addItem = ()=>{
        this.task = {
            taskName:this.state.text,
            done:false,
            taskId:this.idInc++
        }
        this.props.addItem(this.task)
        this.setState({text:""})       
    } 
    render(){
        return <div id="add">
        <span style={{fontSize:22,fontWeight:"bold"}}>Task</span> &nbsp; &nbsp; <input type="text" onChange={this.itemTitle} name="task" id="task" placeholder="Enter your task" value={this.state.text}/> &nbsp; 
        <button onClick={this.addItem}>Add</button>
    </div>
    }
}