import React from "react";
import TodoItem from "./TodoItem"

export default class TodoList extends(React.Component){
    render(){
        return  <TodoItem tasks={this.props.tasks} deleteTask={this.props.deleteTask} doneTask={this.props.doneTask}/>
            
        
    }
}