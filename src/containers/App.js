import './App.css';
import { Component } from 'react';
import {requestRobots, setSearchField} from "../redux-robofriends/actions";
import { connect } from "react-redux";

import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ?
            (
                <div className="App">
                    <h1 className="f1">RoboFriends</h1>
                    <h2 className="f2">Loading...</h2>
                </div>
            ) : (
                <div className="App">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={ onSearchChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
