import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screen/Home/HomeScreen';
import { ContainerScreen } from '@screen/container/ContainerScreen';
import { ICustomStackContentParams } from './CustomStackContent.interface';
import { defaultNavigationStack } from './navigationConfig';

const Stack = createStackNavigator<ICustomStackContentParams>();

export const HomeStack = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavigationStack }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const ComponentStack = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavigationStack }}>
      <Stack.Screen name="ContainerScreen" component={ContainerScreen} />
    </Stack.Navigator>
  );
};
