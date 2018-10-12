import React, {Component} from 'react';
import './index.css';

import FunctionList from './FunctionList.js'
import ExpressionHolder from './ExpressionHolder.js'
class App extends Component {
    
    state = { // Object to hold all user defined funtions
        tasks: [
            {name: "add(x,y)", bgcolor: "blue", args: 2
            , func: (x) => {return x[0] + x[1];}},
            {name: "div(x,y)", bgcolor: "green", args: 2,
                func: (x) => {return x[0] / x[1];}},
            {name: "abs(x)", bgcolor: "yellow", args: 1,
                func: (x) => {return Math.abs(x[0]);}},
            {name: "mult(x,y)", bgcolor: "skyblue", args: 2,
                func: (x) => {return x[0] * x[1];}},
            {name: "sqrt(x)", bgcolor: "pink", args: 1,
                func: (x) => {return Math.sqrt(x[0]);}},
            {name: "mod(x,y)", bgcolor: "grey", args: 2, 
                func: (x) => {return x[0] % x[1];}},
        ],
    }

    render() {
        return (

                <div className="App">
                    <header>
                        <h1>Expression App</h1>
                    </header>
                    
                    <section>
                        <FunctionList tasks={this.state.tasks}/>
                        <ExpressionHolder tasks = {this.state.tasks}/>
                    </section>
                    
                    <footer>
                        <ul>
                            <li>User Guide: Drag function from function list and drop into express area to add a expression; </li>
                            <li>Double click to remove a function.</li>
                            <li>Place holder can take function as input, which will create a expression chain.</li>
                            <li>Place holder can also take numeric input and show result on the right.</li>
                        </ul>
                    
                    </footer>
                </div>
            
        );

    }
}

export default App;