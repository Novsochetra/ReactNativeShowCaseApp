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
      <Stack.Screen name="RowScreen" component={RowScreen} />
      <Stack.Screen name="ColumnScreen" component={ColumnScreen} />
      <Stack.Screen name="ContainerScreen" component={ContainerScreen} />
      <Stack.Screen
        name="ErrorBoundaryScreen"
        component={ErrorBoundaryScreen}
      />
      <Stack.Screen name="CustomSwitchScreen" component={CustomSwitchScreen} />
      <Stack.Screen name="CollapsibleScreen" component={CollapsibleScreen} />
      <Stack.Screen
        name="VersioningReactNativeScreen"
        component={VersioningReactNativeScreen}
      />
      <Stack.Screen
        name="ScrollableHeaderScreen"
        component={ScrollableHeaderScreen}
      />
    </Stack.Navigator>
  );
};
