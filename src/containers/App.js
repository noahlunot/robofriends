import React, {useEffect} from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from './ErrorBoundary'
//redux
import {setSearchField, requestRobots} from '../actions'
import { connect } from 'react-redux';
import Header from '../components/Header'

const mapStateToProps = (state) => {
    return {     
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        },
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {
    const {robots, isPending, onRequestRobots} = props;
    const {searchField, onSearchChange} = props;

    useEffect(() => {
        onRequestRobots()
    }, [onRequestRobots]) 


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ? <h1>Loading</h1> : (
        <div className="tc">
            <Header/>
            <SearchBox searchRobot={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);