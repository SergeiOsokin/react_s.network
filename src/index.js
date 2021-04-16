//главный файл
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './components/Main';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const app = (
  <Provider store={store}>
    <Main />
  </Provider>
)
ReactDOM.render(
  app,
  document.querySelector('.div')
);
