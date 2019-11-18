import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Main from './Social-card/components/main.jsx';
import './style.scss';


ReactDOM.render(<Main/>, document.getElementById('root'));

serviceWorker.unregister();
