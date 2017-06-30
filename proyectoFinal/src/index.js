import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Huetor from './Huetor';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Huetor />,
  document.getElementById('root'));
registerServiceWorker();
