import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Robots failed loading/fetching</h1>
        } else {
            return (
                this.props.children
            )
        }

    }
}

export default ErrorBoundary;