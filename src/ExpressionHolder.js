import React, {Component} from 'react';
import './index.css'
import FunctionItems from './FunctionItems';

class ExpressionHolder extends Component{
    /**
     * Class to render expression on the canvas
     * @param {tasks} props 
     */
    constructor(props){
        super(props);
        this.index = 0;
        this.state = {
            expressions: [],
        };
    }

    onDragOver = (e) =>{
        e.preventDefault();
    };

    onDrop = (ev) => {        
        ev.stopPropagation();
        // let task = JSON.parse(ev.dataTransfer.getData("task"));
        let id = ev.dataTransfer.getData("id");
        let task = {};
        for(let i in this.props.tasks){
            let cur = this.props.tasks[i];
            if( id === cur.name){
                task = cur;
                break;
            }
        }

        let expressions = this.state.expressions.slice();
        const expression = <Expression 
            task = {task}
            tasks = {this.props.tasks}
            key = {task.name + "" + this.index}
            id = {task.name + "" + this.index++}
            callbackDBClick = {this.handleDoubleClick}
        />
        expressions.push(expression);
        this.setState({expressions: expressions});
    };

    handleDoubleClick = (ev, id) =>{
        ev.stopPropagation();
        let array = this.state.expressions.slice();
        let remove = 0;
        for(let i in array){
            if(array[i].props.id === id){
                remove = i;
                
            }
        }

        array.splice(remove, 1);
        this.setState({expressions: array});
    }

    render() {

        return(

            <div className="holder"> 
                <h2>Express area</h2>

                <div className="canvas"
                onDragOver = { (e) => {this.onDragOver(e)}}
                onDrop = { (e) => {this.onDrop(e)}}
                >
                
                    {this.state.expressions}
                </div>

            </div>
        );
    }
}

class Expression extends Component{
    /**
     *  The class handling the expression part
     *  Evalatuate the expression chain inside and print output
     * @param {tasks, task, id, doubleClickCallBack} props 
     */
    constructor(props){
        super(props);

        this.state = {
            result: 0,

        }
    }

    handleUpdateResult = (newResult) => {
        if(isNaN(newResult)){
            newResult = 'invalid input';
        }
        this.setState({result: newResult});
    }

    handleRemove = (ev) =>{
        
        this.props.callbackDBClick(ev, this.props.id);
    }

    render(){
        
        return(
            <div className="expression"
                onDoubleClick = {(ev) => this.handleRemove(ev)}
            >
                <FunctionItems
                task = {this.props.task} 
                tasks = {this.props.tasks}
                updateResult = {this.handleUpdateResult}
                handleRemove = {this.handleRemove}
                />

                <div className="rst">
                    = {this.state.result}
                </div>
                 
            </div>
        );
    }
}

export default ExpressionHolder;