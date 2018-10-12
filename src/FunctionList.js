import React, {Component} from 'react';
import './index.css'

class FunctionList extends Component{
    /**
     * The class holding rendering all function as a 
     * draggable icon.
     * @param {tasks}
     */
    
    onDragOver = (ev) =>{
        ev.preventDefault();
    }

    onDragStart = (e, id) =>{
        e.dataTransfer.setData("id", id);
    }

    render() {
        var tasks = [];
        this.props.tasks.forEach(item => {
            const newItem = 
            <div 
                className="icon" 
                key={item.name}
                style={{backgroundColor: item.bgcolor}}
                draggable
                onDragStart = {(e, id) => this.onDragStart(e, item.name)}>
                {item.name}
            </div>
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