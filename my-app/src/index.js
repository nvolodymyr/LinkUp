import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.style.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import  combineReducers  from './store/reducers';





const store = createStore(
    combineReducers,
    applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));

