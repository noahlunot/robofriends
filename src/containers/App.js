import React from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            searchRobot: '',
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(robots => this.setState({ robots: robots}))
    }

    onSearchChange = (event) => {
        this.setState({searchRobot: event.target.value})
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchRobot.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchField={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;