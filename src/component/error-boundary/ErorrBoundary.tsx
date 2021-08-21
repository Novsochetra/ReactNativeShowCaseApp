import React from 'react';
import {} from 'react-native';
import { IErrorBoundary, IErrorBoundaryState } from './ErrorBoundary.interface';
import { SomethingWentWrong } from './SomethingWentWrong';

export class ErrorBoundary extends React.Component<
  IErrorBoundary,
  IErrorBoundaryState,
  any
> {
  constructor(props: IErrorBoundary) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }
  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(_error: any) {
    // should has API callback for submit the log crush app
  }

  render() {
    if (this.state.hasError) {
      return <SomethingWentWrong onPress={this.props.onPressGoBack} />;
    }

    return this.props.children;
  }
}
