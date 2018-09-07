import React, {Component} from 'react';
import './index.css';

import FunctionList from './FunctionList.js'
import FunctionHolder from './FunctionHolder.js'
class Expression extends Component {
    state = {
        tasks: [
            {name: "f(x,y,z)", bgcolor: "green", args: 3},
            {name: "g(x,y,z)", bgcolor: "yellow", args: 3},
            {name: "f(x,y)", bgcolor: "blue", args: 2},
            {name: "g(x,y)", bgcolor: "pink", args: 2},
            {name: "f(x)", bgcolor: "skyblue", args: 1},
            {name: "f()", bgcolor: "grey", args: 0},
        ],
    }

    render() {
        return (

                <div className="container-drag">
                    <h2 className="header">Expression App</h2>
                    
                    <FunctionList items={this.state.tasks}/>
                    <FunctionHolder items = {this.state.tasks}/>
                    <div className="user-guide">

                        <ul>
                            <li>User Guide: Drag function from function list and drop into express area to add function; </li>
                            <li>Double click to remove a function</li>
                            <li>Place holder can take function as input, which will create a expression chain.</li>
                        </ul>
                    
                    </div>
                </div>
            
        );

    }
}

export default Expression;