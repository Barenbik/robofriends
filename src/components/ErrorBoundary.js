import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
