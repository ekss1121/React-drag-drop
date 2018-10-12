import React, {Component} from 'react';
import './index.css'

class FunctionIcon extends Component{

    onDragStart = (e, id) =>{
        e.dataTransfer.setData("id", id);
    }

    render(){
        return(
            <div className="icon" 
            style={{backgroundColor: this.props.task.bgcolor}}
            draggable
            onDragStart = {(e, id) => this.onDragStart(e, this.props.task.name)}>
                {this.props.task.name}
            </div>

        );
    }
}

class FunctionList extends Component{

    
    onDragOver = (ev) =>{
        ev.preventDefault();
    }

    render() {
        var tasks = [];
        this.props.items.forEach(element => {
            const newItem = <FunctionIcon
                key={element.name} 
                task = {element}
            />
            tasks.push(newItem);
        });

        return(
            <div className="list">
                <h2 className="task-header">Fucntion List</h2>
                    {tasks}
            </div>
                
        );
    }
}

export default FunctionList;