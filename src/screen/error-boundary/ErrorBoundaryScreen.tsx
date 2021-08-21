import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ErrorBoundary as ErrorBoundaryComponent } from '@component/error-boundary/ErorrBoundary';
import { IErrorBoundaryScreenProps } from './ErrorBoundaryScreen.interface';
import { BuggyComponent } from './components/BuggyComponent';

export const ErrorBoundaryScreen: React.FC<IErrorBoundaryScreenProps> = () => {
  const navigation = useNavigation();
  return (
    <ErrorBoundaryComponent onPressGoBack={() => navigation.goBack()}>
      <View>
        <Text>Error Boundary Screen</Text>

        <BuggyComponent />
      </View>
    </ErrorBoundaryComponent>
  );
};
