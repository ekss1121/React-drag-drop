import React, { Component } from 'react';
import './index.css';

// class placeHolders extends Component{

// }

class PlaceHolder extends Component{

    constructor(props){
        super(props);
        this.state = {
            task: this.props.task,
            result: 0,
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
        for(let i in this.props.items){
            let cur = this.props.items[i];
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
                items = {this.props.items}
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


class FunctionItems extends Component{

    constructor(props){
        super(props);

        this.state = {
            result: 0,
            task: this.props.task,
        }

        this.input = [];
        // console.log(this.props.task);
        this.input.length = this.props.task.args;
        
    }

    handleUpdate = (result, id)=>{
        // console.log(id);
        
        this.input[id] = result;
        // console.log(this.input);        
        let newResult = this.props.task.func(this.input);
        this.props.updateResult(newResult);
        this.setState({result: newResult});
        
    }

    handleRemove = (ev) => {
        this.props.handleRemove(ev);
    }



    render(){
        let placeHolders = [];
        for(let i=0; i<this.state.task.args; i++){
            const holder = <PlaceHolder
                key = {i}
                id = {i}
                items = {this.props.items}
                updateResult = {this.handleUpdate}
            />;
            placeHolders.push(holder);
        }

        const icon = <div
                        onDoubleClick = {(ev) => {this.handleRemove(ev)}}
                        >
            {this.state.task.name}

            </div>

        return (
            <div className="function-item"
            style={{backgroundColor: this.state.task.bgcolor}}
            >
                {icon}
                {placeHolders}
            </div>
        );
    }

}

export default FunctionItems;