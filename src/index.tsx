import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./containers/App";

import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { searchRobots, requestRobots } from "./redux-robofriends/reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import * as registerRerviceWorker from "./serviceWorkerRegistration";

import './index.css';
import "tachyons";

/*
 * General components of a Redux project:
 *  - Action
 *  - Reducer
 *  - Store
 */

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const middleware = [thunkMiddleware, logger];
const store = configureStore({ reducer: rootReducer, middleware: middleware });

/*
 * Typescript has a non-null assertion which ensures the value is never null by adding 
 * the ! operator to the end of your statement:
 */
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

registerRerviceWorker.register();