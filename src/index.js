//главный файл
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './Main';
// import reportWebVitals from '../src/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.querySelector('.div')
);
