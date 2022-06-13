import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./redux-robofriends/reducers";

import './index.css';
import "tachyons";


const store = createStore(searchRobots);

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