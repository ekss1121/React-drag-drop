import React, { Component } from 'react';
import './index.css'


class FunctionItems extends Component{

    constructor(props){
        super(props);
        this.show = [];
        for(var i=0; i<props.args; i++){
            this.show.push([]);
        }
        // console.log(this.show);


        this.state = {
            name: this.props.name,
            args: this.props.args,
            bgcolor: this.props.bgcolor,
            express: this.props.express,
            itemList: this.props.items,
            show: this.show,
        }
        
    }

    onDragStart = (ev, id) =>{
        // console.log('drag start:', id);
        ev.dataTransfer.setData("id", id);
    }

    onDrop = (ev) => {
        ev.stopPropagation();
        let index = ev.target.id;
        let id = ev.dataTransfer.getData("id");
        var array = this.state.show.slice();
        this.state.itemList.forEach(item => {
            if(item.name === id && !array[index].includes(id)){
                array[index].push(id);
            }
        });


        this.setState({show: array});
    };

    onDoubleClick = (e) =>{
        e.stopPropagation();
        let id = e.target.innerText;
        let key = e.currentTarget.id;
        console.log(key);
        
        var array = this.state.show.slice();
        var index = array[key].indexOf(id);
        array[key].splice(index,1);
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
        for(var j=0; j<this.state.args; j++){
            tasks.push([]);
        }
        // console.log(this.state);
        
        var show = this.state.show.slice();
        this.state.itemList.forEach(item => {

            for(var i=0; i<this.state.args; i++){
                if(show[i].includes(item.name)){
                    const newItem = <FunctionItems
                    key={item.name} 
                    bgcolor = {item.bgcolor}
                    name = {item.name}
                    args = {item.args}
                    express = {true}
                    items = {this.state.itemList}
                    />
                tasks[i].push(newItem);
                }
            }
            
        });

        var placeHolders  = [];
        for(var i=0; i<this.props.args; i++){
            placeHolders.push(
                <div 
                    key = {i}
                    id = {i}
                    onDrop = {(e) => {this.onDrop(e)}}
                    onDoubleClick = {(e) => {this.onDoubleClick(e)}}
                    className="place-holder" 
                    style={{display: this.state.express ? "inline" : "none"}}
                >
                    {tasks[i]}
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