import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@screen/home/HomeScreen';
import { ICustomStackContentParams } from './CustomStackContent.interface';

const Stack = createStackNavigator<ICustomStackContentParams>();

export const HomeStack = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
