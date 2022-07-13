import { requestRobots, setSearchField } from "../../redux-robofriends/actions";
import { connect } from "react-redux";
import { Component } from 'react';

import CardList from '../cards/CardList';
import SearchBox from "../search/SearchBox";
import Scroll from "../scroll/Scroll";
import ErrorBoundary from "../error-handling/ErrorBoundary";
import Header from "../header/Header";

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

const onClick = (args) => {
    console.log(`This is Robot ${args.name}`);
}

class Home extends Component {

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
                    <Header />
                    <SearchBox searchChange={ onSearchChange } />
                    <Scroll>
                        <ErrorBoundary errorMessage={ "Oops. That is not good..." }>
                            <CardList onClick={ onClick } robots={ filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

