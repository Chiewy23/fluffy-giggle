import React, { Component } from "react";
import { IErrorBoundary } from "./IErrorBoundary";
import { IStateErrorBoundary } from "./IStateErrorBoundary";


class ErrorBoundary extends Component<IErrorBoundary, IStateErrorBoundary> {
    constructor(props: IErrorBoundary) {
        super(props);

        this.state = {
            hasError: false,
            errorMessage: props.errorMessage
        };
    }

    componentDidCatch() {
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