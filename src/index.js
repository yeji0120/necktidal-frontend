import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {rootReducer} from 'store/rootReducer'
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "store/rootReducer";
import "styles/reset.css";

<<<<<<< HEAD
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
=======

ReactDOM.render(
<Provider store={createStore(rootReducer)}>
    <Routes />  
</Provider>, 
document.getElementById("root")
);
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
