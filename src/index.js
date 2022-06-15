import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { searchRobots } from "./redux-robofriends/reducers";
import { createLogger } from "redux-logger/src";

import './index.css';
import "tachyons";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// ACTION
// REDUCER
// STORE