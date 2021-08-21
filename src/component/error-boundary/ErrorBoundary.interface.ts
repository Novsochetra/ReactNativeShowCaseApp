export interface IErrorBoundary {
  onPressGoBack: () => void;
}

export interface IErrorBoundaryState {
  error: null;
  errorInfo: null;
  hasError: boolean;
}
