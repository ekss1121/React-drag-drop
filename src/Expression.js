import React, {Component} from 'react';
import './index.css';
import FunctionItems from './FunctionItems.js'
class Expression extends Component {

    state = {
        tasks: [
            {name: "Learn Angular", category:"wip", bgcolor: "yellow", args: 2, express: false},
            {name: "React", category: "wip", bgcolor: "pink", args: 1, express: false},
            {name: "Vue", category: "wip", bgcolor: "skyblue", args: 3, express: false}
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
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        };
        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <FunctionItems
                key={t.name} 
                bgcolor = {t.bgcolor}
                name = {t.name}
                express = {t.express}
                args = {t.args}
                >

                </FunctionItems>
            );
        });
        return (
            <div className="container-drag">
                <h2 className="header">Expression App</h2>
                <div className="wip"
                    onDragOver = { (e) => {this.onDragOver(e)}}
                    onDrop = { (e) => {this.onDropBack(e, "wip")}}
                >
                    <span className="task-header">Functions</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver= { (e) => this.onDragOver(e)}
                    onDrop = {(e) => this.onDrop(e, "complete")}
                >
                    <span className="task-header">Express Area</span>
                    {tasks.complete}
                </div>
            </div>
        );

    }
}

export default Expression;