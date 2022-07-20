import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RobotPage from '../components/pages/RobotPage';

/**
 * **** TO-DO ****
 *  - Update icons.
 *  - Complete unit tests.
 *  - Default page and unrecorgnised url page.
 *  - Back button for robot page.
 */

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/" element={() => <div>Hello</div>} />
                <Route path="/fluffy-giggle" element={<Home />} />
                <Route path="/fluffy-giggle/:id" element={<RobotPage />} />
            </Routes>
        </Router>
        );
    }
}

export default App;
