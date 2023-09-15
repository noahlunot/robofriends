import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./containers/App"
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//redux
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
//redux-middleware
// import {createLogger} from 'redux-logger'
// const logger = createLogger()

import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();