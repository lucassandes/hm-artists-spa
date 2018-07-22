import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/skeleton.css';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
