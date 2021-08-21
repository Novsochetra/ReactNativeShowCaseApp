import React from 'react';
import { Text, View } from 'react-native';
import { ErrorBoundary as ErrorBoundaryComponent } from '@component/error-boundary/ErorrBoundary';
import { IErrorBoundaryScreenProps } from './ErrorBoundaryScreen.interface';
import { BuggyComponent } from './components/BuggyComponent';

export const ErrorBoundaryScreen: React.FC<IErrorBoundaryScreenProps> = () => {
  return (
    <ErrorBoundaryComponent onPressGoBack={() => {}}>
      <View>
        <Text>Error Boundary Screen</Text>

        <BuggyComponent />
      </View>
    </ErrorBoundaryComponent>
  );
};
