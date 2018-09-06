import React, {Component} from 'react';
import './index.css';
import FunctionItems from './FunctionItems.js'
import FunctionList from './FunctionList.js'
import FunctionHolder from './FunctionHolder.js'
class Expression extends Component {

    state = {
        tasks: [
            {name: "function-1", bgcolor: "yellow", args: 2},
            {name: "function-0", bgcolor: "pink", args: 1},
            {name: "smart-function", bgcolor: "skyblue", args: 3},
            {name: "userful-function", bgcolor: "grey", args: 0}
        ],
    }

    // onDragOver = (ev) =>{
    //     ev.preventDefault();
    // }

    // onDrop = (ev, cat) => {
    //     let id = ev.dataTransfer.getData("id");

        

    //     let tasks = this.state.tasks.filter((task) =>{
    //         if (task.name === id){
    //             task.category = cat;
    //             task.express = true;
    //         }

    //         return task;
    //     })

    //     this.setState({
    //         ...this.state,
    //         tasks
    //     })
    // }

    // onDropBack = (ev, cat) => {
    //     let id = ev.dataTransfer.getData("id");

        
    //     console.log(id);
        
    //     let tasks = this.state.tasks.filter((task) =>{
    //         if (task.name === id){
    //             task.category = cat;
    //             task.express = false;
    //         }

    //         return task;
    //     })

    //     this.setState({
    //         ...this.state,
    //         tasks
    //     })
    // }

    render() {
        var tasks =[];
        this.state.tasks.forEach((t) => {
            tasks.push(
                <FunctionItems
                key={t.name} 
                bgcolor = {t.bgcolor}
                name = {t.name}
                args = {t.args}
                >

                </FunctionItems>
            );
        });
        return (
            <div className="container-drag">
                <h2 className="header">Expression App</h2>
                <FunctionList items={tasks}></FunctionList>
                <FunctionHolder items = {tasks}></FunctionHolder>
            </div>
        );

    }
}

export default Expression;