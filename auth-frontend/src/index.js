import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    return config;
})

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
