 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './components/App';
 import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import store from "./store.js";

//store.subscribe(() => {
//  console.log("Store Updated!", store.getState());
//});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker(); 
