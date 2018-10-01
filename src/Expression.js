import React, {Component} from 'react';
import './index.css';

import FunctionList from './FunctionList.js'
import FunctionHolder from './FunctionHolder.js'
class Expression extends Component {
    state = {
        tasks: [
            {name: "add(x,y)", bgcolor: "green", args: 2
            , func: (x,y) => {return x + y;}},
            {name: "div(x,y)", bgcolor: "yellow", args: 2,
                func: (x, y) => {return x / y;}},
            {name: "abs(x)", bgcolor: "blue", args: 1,
                func: (x) => {return Math.abs(x);}},
            {name: "mult(x,y)", bgcolor: "pink", args: 2,
                func: (x, y) => {return x * y;}},
            {name: "sqrt(x)", bgcolor: "skyblue", args: 1,
                func: (x) => {return Math.sqrt(x);}},
            {name: "mod(x,y)", bgcolor: "grey", args: 2, 
                func: (x,y) => {return x % y;}},
        ],
    }

    render() {
        return (

                <div>
                    <header>Expression App</header>
                    
                    <section className="wip">
                        <FunctionList items={this.state.tasks}/>
                    </section>
                    
                    <aside>

                        <FunctionHolder items = {this.state.tasks}/>
                    </aside>
                    
                    <footer>

                        <ul>
                            <li>User Guide: Drag function from function list and drop into express area to add function; </li>
                            <li>Double click to remove a function</li>
                            <li>Place holder can take function as input, which will create a expression chain.</li>
                        </ul>
                    
                    </footer>
                </div>
            
        );

    }
}

export default Expression;