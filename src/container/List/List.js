import React, { Component } from 'react';
import './List.css';
import Task from '../Task/Task';
import {connect} from "react-redux";

import {addTask, removeTask, editTask} from "../../actions/listActions"

class List extends Component {
    constructor(props) {
        super(props);

        this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
        this.handleEditComplete = this.handleEditComplete.bind(this);
        this.handleRemoveTaskClick = this.handleRemoveTaskClick.bind(this);
      }

      handleAddTaskClick = (event) => {
        event.preventDefault();
        const task = this.refs.newTask.value;
        this.props.addTask(task);
        this.refs.newTask.value = "";
    }      

    handleEditComplete = (newTaskValue, originalValue, event) => {        
        this.props.editTask(newTaskValue, originalValue);
    }

    handleRemoveTaskClick = (task, event) => {
        this.props.removeTask(task); 
    }

    render() {
        let fullList = this.props.listReducer.taskList.map((task) => {
            /* I'm trying to get mapping to work with the uniqId 
                while still using the task array to display but
                I'm not very familiar with how arrays work. Still
                working on this.
            console.log("task: " + task + " I: ") 
            */
            return (
                <li key={task} className="cssTask">
                <Task taskId={task} task={task} 
                  editComplete={this.handleEditComplete}   
                  removeTask={this.handleRemoveTaskClick}
                />       
                </li>   
            );
        })

        return(
            <div className="List">
                <p>Enjoy your Tasks!</p>
                <ul>
                    {fullList}
                </ul>
                <form onSubmit={this.handleAddTaskClick}>
                  <input type="text" 
                    placeholder="Enter Task: "
                    ref="newTask"
                  />
                  <button>Add a Task</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return{
        listReducer: state.listReducer
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addTask: (task) => {
            dispatch(
                addTask(task)
            );
        },
        removeTask: (task) => {
            dispatch(
                removeTask(task)
            );
        },
        editTask: (task, originalValue) => {
            dispatch(
                editTask(task, originalValue)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (List);
