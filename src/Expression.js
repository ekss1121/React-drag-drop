import React, {Component} from 'react';
import './index.css';

import FunctionList from './FunctionList.js'
import FunctionHolder from './FunctionHolder.js'
class Expression extends Component {
    state = {
        tasks: [
<<<<<<< HEAD
            {name: "f(a,b)", category:"wip", bgcolor: "yellow", args: 2, express: false},
            {name: "f(a)", category: "wip", bgcolor: "pink", args: 1, express: false},
            {name: "f(x,y,z)", category: "wip", bgcolor: "skyblue", args: 3, express: false},
            {name: "f()", category: "wip", bgcolor: "grey", args: 0, express: false}
        ]
    }

    onDragOver = (ev) =>{
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        

        let tasks = this.state.tasks.filter((task) =>{
            if (task.name === id){
                task.category = cat;
                task.express = true;
            }

            return task;
        })

        this.setState({
            ...this.state,
            tasks
        })
    }

    onDropBack = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        
        console.log(id);
        
        let tasks = this.state.tasks.filter((task) =>{
            if (task.name === id){
                task.category = cat;
                task.express = false;
            }

            return task;
        })

        this.setState({
            ...this.state,
            tasks
        })
=======
            {name: "f(x,y,z)", bgcolor: "green", args: 3},
            {name: "g(x,y,z)", bgcolor: "yellow", args: 3},
            {name: "f(x,y)", bgcolor: "blue", args: 2},
            {name: "g(x,y)", bgcolor: "pink", args: 2},
            {name: "f(x)", bgcolor: "skyblue", args: 1},
            {name: "f()", bgcolor: "grey", args: 0},
        ],
>>>>>>> complex
    }

    render() {
        return (

                <div className="container-drag">
                    <h2 className="header">Expression App</h2>
                    
                    <FunctionList items={this.state.tasks}/>
                    <FunctionHolder items = {this.state.tasks}/>
                    <div className="user-guide">

                        <ul>
                            <li>User Guide: Drag function from function list and drop into express area to add function; </li>
                            <li>Double click to remove a function</li>
                            <li>Place holder can take function as input, which will create a expression chain.</li>
                        </ul>
                    
                    </div>
                </div>
            
        );

    }
}

export default Expression;