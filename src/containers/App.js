import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * **** TO-DO ****
 *  - Update icons.
 *  - Implement React Router.
 *  - Complete unit tests.
 */

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/fluffy-giggle" element={<Home />} />
            </Routes>
        </Router>
        );
    }
}

export default App;
