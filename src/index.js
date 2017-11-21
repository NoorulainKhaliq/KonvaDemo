import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRect from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRect />, document.getElementById('root'));
registerServiceWorker();
