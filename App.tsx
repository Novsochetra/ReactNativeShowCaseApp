import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppStore } from '@core/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '@core/navigation';
import { StatusBar } from 'react-native';
import { theme } from '@core/asset/style/theme';

const { store } = createAppStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default App;
