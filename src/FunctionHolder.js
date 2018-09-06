import React, {Component} from 'react';
import './index.css'

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

        let id = ev.dataTransfer.getData("id");
        var array = this.state.show.slice();
        this.state.itemList.forEach(item => {
            if(item.key === id){
                array.push(item);
            }
        });

        this.setState({show: array});
    };

    render() {

        var tasks = [];
        this.state.show.forEach(element => {
            tasks.push(element);
        });

        return(
            <div className="droppable"
                onDragOver = { (e) => {this.onDragOver(e)}}
                onDrop = { (e) => {this.onDrop(e)}}
                >
                    {tasks}
            </div>
        );
    }
}

export default FunctionHolder;