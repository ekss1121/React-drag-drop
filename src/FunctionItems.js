import React, { Component } from 'react';
import './index.css';


class FunctionItems extends Component{
    /**
     * 
     * @param {task, tasks, onChangeCallBack, onDoubleClickCallBack} props 
     */
    constructor(props){
        super(props);

        this.state = {
            result: 0,
        }

        this.input = [];
        console.log(this.props.task);
        
        this.input.length = this.props.task.args;
        
    }

    handleUpdate = (result, id)=>{
        // id: the index of the input box
        
        this.input[id] = result;
        // Evaluate the final result        
        let newResult = this.props.task.func(this.input);
        this.props.updateResult(newResult);
        this.setState({result: newResult});
        
    }

    handleRemove = (ev) => {
        this.props.handleRemove(ev);
    }



    render(){
        let placeHolders = [];
        for(let i=0; i<this.props.task.args; i++){
            const holder = <PlaceHolder
                key = {i}
                id = {i}
                tasks = {this.props.tasks}
                updateResult = {this.handleUpdate}
            />;
            placeHolders.push(holder);
        }

        const icon = <div
                        onDoubleClick = {(ev) => {this.handleRemove(ev)}}
                        >
            {this.props.task.name}

            </div>

        return (
            <div className="function-item"
            style={{backgroundColor: this.props.task.bgcolor}}
            >
                {icon}
                {placeHolders}
            </div>
        );
    }

}

class PlaceHolder extends Component{

    constructor(props){
        super(props);
        this.state = {
            result: 0,
            task: undefined,
        }
    }

    handleUpdate = (result) =>{
        
        this.props.updateResult(result, this.props.id);
        // this.setState({result: result});
    }

    handleOnChange = (ev) =>{
        let v = parseFloat(ev.target.value);
        // console.log(v);
        this.handleUpdate(v);
        this.setState({result: parseFloat(v)});
    }

    handleDrop = (ev) => {
        ev.stopPropagation();
        let id = ev.dataTransfer.getData("id");
        let task = {};
        for(let i in this.props.tasks){
            let cur = this.props.tasks[i];
            if(cur.name === id){
                task = cur;
            }
        }
        // let task = JSON.parse(ev.dataTransfer.getData("task"));
        this.setState({
            task: task,
        })
    }

    handleRemove = (ev) => {
        ev.stopPropagation();
        this.setState({
            task: undefined,
        })
    }

    render(){
        if(this.state.task !== undefined){
            return (
                <FunctionItems 
                task = {this.state.task}
                updateResult = {this.handleUpdate}
                tasks = {this.props.tasks}
                handleRemove = {this.handleRemove}
                />
            );
        } else {
            return (
                <textarea onChange = {(ev)=>{this.handleOnChange(ev)}}
                        onDrop = {(ev) => {this.handleDrop(ev)}}
                        placeholder="input"
                ></textarea>
            );
        }
        
    }
}

export default FunctionItems;