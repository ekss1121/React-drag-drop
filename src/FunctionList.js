import React, {Component} from 'react';
import './index.css'

class FunctionIcon extends Component{

    onDragStart = (e, id) =>{
        e.dataTransfer.setData("id", id);
    }

    render(){
        return(
            <div className="icon" 
            style={{backgroundColor: this.props.bgcolor}}
            draggable
            onDragStart = {(e, id) => this.onDragStart(e, this.props.name)}>
                {this.props.name}
            </div>

        );
    }
}

class FunctionList extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: this.props.items,
            // show: this.props.items,
        }
    }
    
    onDragOver = (ev) =>{
        ev.preventDefault();
    }

    render() {
        var tasks = [];
        this.state.itemList.forEach(element => {
            const newItem = <FunctionIcon
                key={element.name} 
                bgcolor = {element.bgcolor}
                name = {element.name}
            />
            tasks.push(newItem);
        });

        return(
            <div>
                <span className="task-header">Fucntion List</span>
                    {tasks}
            </div>
                
        );
    }
}

export default FunctionList;