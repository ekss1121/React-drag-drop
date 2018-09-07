import React, {Component} from 'react';
import './index.css';

import FunctionList from './FunctionList.js'
import FunctionHolder from './FunctionHolder.js'
class Expression extends Component {
    state = {
        tasks: [
            {name: "function-1", bgcolor: "yellow", args: 2},
            {name: "function-0", bgcolor: "pink", args: 1},
            {name: "smart-function", bgcolor: "skyblue", args: 3},
            {name: "userful-function", bgcolor: "grey", args: 0},
        ],
    }

    render() {
        return (

                <div className="container-drag">
                    <h2 className="header">Expression App</h2>
                    <FunctionList items={this.state.tasks}/>
                    <FunctionHolder items = {this.state.tasks}/>
                </div>
            
        );

    }
}

export default Expression;