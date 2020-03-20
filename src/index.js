import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {rootReducer} from 'store/rootReducer'
import Routes from "./Routes";
import 'styles/reset.css';


ReactDOM.render(
<Provider store={createStore(rootReducer)}>
    <Routes />  
</Provider>, 
document.getElementById("root")
);