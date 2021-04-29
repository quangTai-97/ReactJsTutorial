import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppApi from './Api'
import Home from './pages/home'

ReactDOM.render(<AppApi />,  document.getElementById('root'))

reportWebVitals();

