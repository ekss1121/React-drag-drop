import React, {Component} from 'react';
import './index.css'
import FunctionItems from './FunctionItems';

class FunctionList extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: this.props.items,
            show: this.props.items,
        }
    }
    
    onDragOver = (ev) =>{
        ev.preventDefault();
    }

    render() {
        var tasks = [];
        this.state.show.forEach(element => {
            const newItem = <FunctionItems
                key={element.name} 
                bgcolor = {element.bgcolor}
                name = {element.name}
                args = {element.args}
                express = {false}
                items = {this.state.itemList}
            
            />
            tasks.push(newItem);
        });

        return(
            <div className="wip"
                >
                <span className="task-header">Fucntion List</span>
                    {tasks}
            </div>
        );
    }
}

export default FunctionList;