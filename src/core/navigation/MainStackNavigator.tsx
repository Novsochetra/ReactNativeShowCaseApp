import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { RowScreen } from '@screen/row/RowScreen';
import { ColumnScreen } from '@screen/column/ColumnScreen';
import { ContainerScreen } from '@screen/container/ContainerScreen';
import { ErrorBoundaryScreen } from '@screen/error-boundary/ErrorBoundaryScreen';
import { CollapsibleScreen } from '@screen/collapsibe/CollapsibleScreen';
import { VersioningReactNativeScreen } from '@screen/versioning-react-native/VersioningReactNativeScreen';
import { ScrollableHeaderScreen } from '@screen/scrollable-header/ScrollableHeaderScreen';
import { CustomSwitchScreen } from '@screen/custom-switch/CustomSwitchScreen';
import { defaultNavigationStack } from './navigationConfig';
import { GoogleChromeTabScreen } from '@screen/google-chrome-tab/GoogleChromeTabScreen';
import { FadeInScreen } from '@screen/FadeIn';

const Stack = createStackNavigator<IMainStackNavigatorParams>();

export const MainStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          ...defaultNavigationStack,
          detachPreviousScreen: !navigation.isFocused(),
        };
      }}
      initialRouteName="BottomTabNavigator">
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false, headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="RowScreen"
        component={RowScreen}
        options={{ title: 'Row' }}
      />
      <Stack.Screen
        name="ColumnScreen"
        component={ColumnScreen}
        options={{ title: 'Column' }}
      />
      <Stack.Screen
        name="ContainerScreen"
        component={ContainerScreen}
        options={{ title: 'Container' }}
      />
      <Stack.Screen
        name="ErrorBoundaryScreen"
        component={ErrorBoundaryScreen}
        options={{ title: 'Error Boundary' }}
      />
      <Stack.Screen
        name="CustomSwitchScreen"
        component={CustomSwitchScreen}
        options={{ title: 'Custom Switch' }}
      />
      <Stack.Screen
        name="CollapsibleScreen"
        component={CollapsibleScreen}
        options={{ title: 'Collapsible' }}
      />
      <Stack.Screen
        name="VersioningReactNativeScreen"
        component={VersioningReactNativeScreen}
        options={{ title: 'Verisioning React Native' }}
      />
      <Stack.Screen
        name="ScrollableHeaderScreen"
        component={ScrollableHeaderScreen}
        options={{ title: 'Scrollable Header' }}
      />
      <Stack.Screen
        name="GoogleChromeTabScreen"
        component={GoogleChromeTabScreen}
        options={{ title: 'Google Chrome Tab' }}
      />
      <Stack.Screen
        name="FadeIn"
        component={FadeInScreen}
        options={{ title: 'Fade In' }}
      />
    </Stack.Navigator>
  );
};
