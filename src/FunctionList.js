import React, {Component} from 'react';
import './index.css'

class FunctionList extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: this.props.items,
            show: this.props.items,
        }
    }
    
    onDragStart = (ev) => {
        let id = ev.dataTransfer.getData("id");
        var array = [];
        this.state.itemList.forEach(item => {
            if(item.key !== id){
                array.push(item);
            }
        });

        this.setState({show: array});
    }
    onDragOver = (ev) =>{
        // ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        // let id = ev.dataTransfer.getData("id");

        

        // let tasks = this.state.tasks.filter((task) =>{
        //     if (task.name === id){
        //         task.category = cat;
        //         task.express = true;
        //     }

        //     return task;
        // })

        // this.setState(
        //     ...this.state,
        //     tasks
        // })
    }

    render() {
        var tasks = [];
        this.state.show.forEach(element => {
            tasks.push(element);
        });

        return(
            <div className="wip"
                    onDragStart = {(e) => {this.onDragStart(e)}}
                    // onDragOver = { (e) => {this.onDragOver(e)}}
                    // onDrop = { (e) => {this.onDrop(e, "wip")}}
                >
                    {tasks}
            </div>
        );
    }
}

export default FunctionList;