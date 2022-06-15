import './App.css';
import { Component } from 'react';
import { setSearchField } from "../redux-robofriends/actions";
import { connect } from "react-redux";

import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({
                    robots: users
                })
            })
            .catch(err => {
                console.error("[-] ERROR retrieving users data.");
            });
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return robots.length === 0 ?
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
