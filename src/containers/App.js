import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import RobotPage from '../components/pages/RobotPage';
import DefaultPage from '../components/pages/DefaultPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * **** TO-DO ****
 *  - Complete unit tests.
 */

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route exact path="/fluffy-giggle" element={<Home />} />
                <Route exact path="/fluffy-giggle/:id" element={<RobotPage />} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </Router>
        );
    }
}

export default App;
