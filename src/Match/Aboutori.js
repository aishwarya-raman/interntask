import React, { Component } from 'react';
/*
class About extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>About Page</h2></div>
            </div>
        );
    }
}*/


//start

import './About.css';
export default class About extends Component {
    state = {
        tasks: [
            {name:"Hit the gym",category:"todo", bgcolor: "#FFB695"},
            {name:"Get breakfast", category:"todo", bgcolor:"#96D1CD"},
          ]
    }

    render() {
        var tasks = {
            todo: [],
            done: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="todo">
                    <span className="task-header">To-Do List</span>
                    {tasks.todo}
                </div>
                <div className="droppable">
                     <span className="task-header">Tasks Done</span>
                     {tasks.done}
                </div>


            </div>
        );
    }
}

//end

