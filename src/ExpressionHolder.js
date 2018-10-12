import React, {Component} from 'react';
import './index.css'
import FunctionItems from './FunctionItems';

class Expression extends Component{

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
                items = {this.props.items}
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

class ExpressionHolder extends Component{

    constructor(props){
        super(props);
        this.index = 0;
        this.state = {
            items: this.props.items,
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
        for(let i in this.state.items){
            let cur = this.state.items[i];
            if( id === cur.name){
                task = cur;
                break;
            }
        }

        let expressions = this.state.expressions.slice();
        const expression = <Expression 
            task = {task}
            items = {this.state.items}
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

export default ExpressionHolder;