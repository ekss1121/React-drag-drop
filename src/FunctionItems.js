import React, { Component } from 'react';
import './index.css'

class FunctionItems extends Component{


    onDragStart = (ev, id) =>{
        // console.log('drag start:', id);
        ev.dataTransfer.setData("id", id);
    }

    render() {

        const icon = (
            <div
                className="draggable"
                style={{backgroundColor: this.props.bgcolor}}
            >
                {this.props.name}
            </div>
        );

        var placeHolders  = [];
        for(var i=0; i<this.props.args; i++){
            placeHolders.push(
                <div 
                    key = {i}
                    className="place-holder" 
                    style={{display: this.props.express ? "inline" : "none"}}
                >
                    function input
                </div>
            );
        }
        return (
            <div className="function-item" draggable
            onDragStart = {(e) => this.onDragStart(e, this.props.name)}>
                {icon}
                {placeHolders}
            </div>
        );
    }
}

export default FunctionItems;