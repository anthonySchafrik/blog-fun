import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import App from "./component/App.js";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render( 
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>
  , document.getElementById("root"));