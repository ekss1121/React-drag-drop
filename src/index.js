import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Expression from './Expression';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Expression />, document.getElementById('root'));
registerServiceWorker();
