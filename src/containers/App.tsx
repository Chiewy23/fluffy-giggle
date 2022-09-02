import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import RobotPage from '../components/pages/RobotPage';
import DefaultPage from '../components/pages/DefaultPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * **** TO-DO ****
 *  - Complete unit tests.
 *  - Finish Default page.
 *  - Sidebar:
 *      - Login
 *      - Create Robot
 *      - Delete Robot
 *      - Edit Robot
 *  - Create Robot option.
 *  - Save Robots to DB (Redis or Postgres)
 */

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/fluffy-giggle" element={<Home />} />
                <Route path="/fluffy-giggle/:id" element={<RobotPage />} />
                <Route path="*" element={
                    <DefaultPage onClick={ () => console.log("Temp callback") } text="Oops! We don't recognise that URL." />
                } />
            </Routes>
        </Router>
        );
    }
}

export default App;
