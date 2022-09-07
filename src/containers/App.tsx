import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import RobotPage from '../components/pages/RobotPage';
import DefaultPage from '../components/pages/DefaultPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * **** TO-DO ****
 *  - Complete unit tests.
 *  - Sidebar:
 *      - Login
 *      - Create Robot
 *      - Delete Robot
 *      - Edit Robot
 *  - Save Robots to DB (Redis or Postgres)
 */


 const redirect = () => {
     return <Route path="/fluffy-giggle" element={<Home />} />;
 }

class App extends Component {
    render() {
        return (
        <Router>
            <Routes>
                <Route path="/fluffy-giggle" element={<Home />} />
                <Route path="/fluffy-giggle/:id" element={<RobotPage />} />
                <Route path="*" element={
                    <DefaultPage onClick={ redirect } text="Oops! We don't recognise that URL." />
                } />
            </Routes>
        </Router>
        );
    }
}

export default App;
