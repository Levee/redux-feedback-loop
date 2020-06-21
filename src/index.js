import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = 0, action) => {
  let newState = state;
  if (action.type === 'GET_FEELING') {
    newState = action.payload;
  }
  if (action.type === 'RESET_STATE') {
    newState = 0;
  }
  return newState;
}

const understandingReducer = (state = 0, action) => {
  let newState = state;
  if (action.type === 'GET_UNDERSTANDING') {
    newState = action.payload;
  }
  if (action.type === 'RESET_STATE') {
    newState = 0;
  }
  return newState;
}

const supportReducer = (state = 0, action) => {
  let newState = state;
  if (action.type === 'GET_SUPPORT') {
    newState = action.payload;
  }
  if (action.type === 'RESET_STATE') {
    newState = 0;
  }
  return newState;
}

const commentsReducer = (state = '', action) => {
  let newState = state;
  if (action.type === 'GET_COMMENTS') {
    newState = action.payload;
  }
  if (action.type === 'RESET_STATE') {
    newState = '';
  }
  return newState;
}

const nameReducer = (state = '', action) => {
  let newState = state;
  if (action.type === 'GET_NAME') {
    newState = action.payload;
  }
  if (action.type === 'RESET_STATE') {
    newState = '';
  }
  return newState;
}

const storeInstance = createStore(
  combineReducers({
    nameReducer,
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
