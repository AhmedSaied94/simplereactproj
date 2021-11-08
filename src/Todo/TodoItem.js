import "./TodoItem.css"
import React from "react";


export default class TodoItem extends(React.Component){
    deleteTask = (taskId)=>{
        this.props.deleteTask(taskId)
        
    }

    doneTask = (taskId)=>{
        this.props.doneTask(taskId)
    }
    render(){
        return  <div id="ul" key="todo">
        <ul key="todoitemUl">
            {this.props.tasks.map((item)=>{
                return <li key={item.taskId} className={item.done?"tDone":""}>{item.taskName}<button style={{backgroundColor:"rgb(13, 155, 13)"}} onClick={()=>this.doneTask(item.taskId)}>M</button><button style={{backgroundColor:"red"}} onClick={()=>this.deleteTask(item.taskId)}>D</button></li>
            })}
        </ul>
        </div>
        
        
    }
}