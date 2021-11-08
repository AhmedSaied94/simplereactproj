import "./Todo.css"
import React from "react";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";

export default class Todo extends(React.Component){
    constructor(){
        super();
        this.state = {
            tasksList : []
        }
    }
    componentDidMount(){
        if(localStorage.tasks){
            let tasks  = JSON.parse(localStorage.tasks)
            this.setState({tasksList:tasks})
        }
    }

    componentWillUnmount(){
        localStorage.tasks = JSON.stringify(this.state.tasksList);
    }

    addItem=(item)=>{
        this.state.tasksList.push(item);
        this.setState({tasksList : this.state.tasksList})
        console.log(this.state.tasksList)
    }
    deleteTask= (taskId)=>{
        let indx = this.state.tasksList.findIndex((ind)=> taskId === ind.taskId)
        this.state.tasksList.splice(indx, 1)
        this.setState({taskList:this.state.tasksList})
    }

    doneTask=(taskId)=>{
        let task = this.state.tasksList.find((t)=> taskId === t.taskId)
        task.done = !task.done
        this.setState({taskList:this.state.tasksList})
    }

    render(){
        return <div id="contain">
            <TodoList tasks={this.state.tasksList} deleteTask={this.deleteTask} doneTask={this.doneTask} />
            <TodoAddForm addItem={this.addItem} />
        </div>
    }
}
