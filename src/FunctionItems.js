import React, { Component } from 'react';
import './index.css'

// import FunctionHolder from './FunctionHolder.js'

class FunctionItems extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            args: this.props.args,
            bgcolor: this.props.bgcolor,
            express: this.props.express,
            itemList: this.props.items,
            show:[],
        }
    }

    onDragStart = (ev, id) =>{
        // console.log('drag start:', id);
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (ev) => {
        ev.stopPropagation();
        let id = ev.dataTransfer.getData("id");
        var array = this.state.show.slice();
        this.state.itemList.forEach(item => {
            if(item.name === id && !array.includes(id)){
                array.push(id);
            }
        });

        this.setState({show: array});
    };

    onDoubleClick = (e) =>{
        e.stopPropagation();
        let id = e.target.innerText;
        var array = this.state.show.slice();
        var index = array.indexOf(id);
        array.splice(index,1);
        this.setState({show: array});
    }

    render() {

        const icon = (
            <div
                className="draggable"
                style={{backgroundColor: this.state.bgcolor}}
            >
                {this.state.name}
            </div>
        );

        var tasks = [];
        var show = this.state.show.slice();
        this.state.itemList.forEach(item => {
            if(show.includes(item.name)){
                const newItem = <FunctionItems
                key={item.name} 
                bgcolor = {item.bgcolor}
                name = {item.name}
                args = {item.args}
                express = {true}
                items = {this.state.itemList}
                />
            tasks.push(newItem);
            }
            
        });

        var placeHolders  = [];
        for(var i=0; i<this.props.args; i++){
            placeHolders.push(
                <div 
                    key = {i}
                    onDrop = {(e) => {this.onDrop(e)}}
                    onDoubleClick = {(e) => {this.onDoubleClick(e)}}
                    className="place-holder" 
                    style={{display: this.state.express ? "inline" : "none"}}
                >
                    {tasks}
                </div>
            );
        }
        return (
            <div className="function-item" draggable
            onDragStart = {(e, id) => this.onDragStart(e, this.state.name)}>
                {icon}
                {placeHolders}
            </div>
        );
    }
}

export default FunctionItems;