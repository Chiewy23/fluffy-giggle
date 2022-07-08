import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./redux-robofriends/reducers";
import { createLogger } from "redux-logger/src";
import thunkMiddleware from "redux-thunk";

import * as registerRerviceWorker from "./serviceWorkerRegistration";

import './index.css';
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

registerRerviceWorker.register();

// ACTION
// REDUCER
// STORE