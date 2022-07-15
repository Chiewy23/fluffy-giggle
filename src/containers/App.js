import './App.css';
import React, { Component } from 'react';
import Home from "../components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RobotPage from '../components/pages/RobotPage';

/**
 * **** TO-DO ****
 *  - Update icons.
 *  - Complete unit tests.
 *  - Page redirection.
 */

class App extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            name: "",
            email: ""
        };
    }

    _onClick = (args) => {
        this.setState({
            id: args.id,
            name: args.name,
            email: args.email
        });
    }

    render() {

        const { id, name, email } = this.state;

        return (
        <Router>
            <Routes>
                <Route path="/fluffy-giggle" element={<Home onClick={this._onClick} />} />
                <Route path="/fluffy-giggle/:id" element={<RobotPage id={id} name={name} email={email} />} />
            </Routes>
        </Router>
        );
    }
}

export default App;
