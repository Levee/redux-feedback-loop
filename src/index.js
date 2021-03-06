import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// stores input from the feeling component
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
// stores input from the understanding component
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
// stores input from the support component
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
// stores input from the comments component
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
// allows for expansion if I wanted to add a name
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
// creates the store
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
