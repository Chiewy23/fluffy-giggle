import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RobotPage from '../components/pages/RobotPage';
import DefaultPage from '../components/pages/DefaultPage';

/**
 * **** TO-DO ****
 *  - Complete unit tests.
 *  - Back button for robot page.
 *  - Error handling for when a user manually types an ID into URL.
 */

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/fluffy-giggle" element={<Home />} />
                <Route path="/fluffy-giggle/:id" element={<RobotPage />} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </Router>
        );
    }
}

export default App;
