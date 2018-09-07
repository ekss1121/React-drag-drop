import React, {Component} from 'react';
import './index.css'
import FunctionItems from './FunctionItems';

class FunctionHolder extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: this.props.items,
            show: [],
        };
    }

    onDragOver = (e) =>{
        e.preventDefault();
    };

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

        return(
            <div className="droppable"
                onDragOver = { (e) => {this.onDragOver(e)}}
                onDrop = { (e) => {this.onDrop(e)}}
                onDoubleClick = {(e) => {this.onDoubleClick(e)}}
                >

                <span className="task-header">Express area</span>
                    {tasks}
            </div>
        );
    }
}

export default FunctionHolder;