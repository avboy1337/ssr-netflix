import React, { Component, ReactNode } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfoo) {
    console.log(errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Something went wrong..</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
