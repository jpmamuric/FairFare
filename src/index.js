import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.css';
import App from './react/components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
