import React, { Component } from 'react';
import './index.css'

class FunctionItems extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            args: this.props.args,
            bgcolor: this.props.bgcolor,
            express: false,
        }
    }

    onDragStart = (ev, id) =>{
        // console.log('drag start:', id);
        ev.dataTransfer.setData("id", id);
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

        var placeHolders  = [];
        for(var i=0; i<this.props.args; i++){
            placeHolders.push(
                <div 
                    key = {i}
                    className="place-holder" 
                    style={{display: this.state.express ? "inline" : "none"}}
                >
                    place holder
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