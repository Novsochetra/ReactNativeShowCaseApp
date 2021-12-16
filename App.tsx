import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '@core/navigation';
import { StatusBar } from 'react-native';
import { theme } from '@core/asset/style/theme';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={theme.black400}
          barStyle="light-content"
          translucent={true}
        />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
