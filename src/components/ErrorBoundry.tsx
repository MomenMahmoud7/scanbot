import React, {Component, FC} from 'react';
import ErrorFallback from './ErrorFallback';

type PropsType = {
  ErrorUI?: FC<{error: Error}>;
};

type StateType = {
  error?: Error;
};

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }

  componentDidCatch = (error: Error) => {
    this.setState({error});
  };

  render() {
    const {children, ErrorUI = ErrorFallback} = this.props;
    const {error} = this.state;

    if (error) {
      return <ErrorUI error={error} />;
    }
    return children;
  }
}

export default ErrorBoundary;
