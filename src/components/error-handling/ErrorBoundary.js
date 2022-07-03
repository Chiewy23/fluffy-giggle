import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorMessage: props.errorMessage
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1 data-testid="error-title">{ this.state.errorMessage }</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;