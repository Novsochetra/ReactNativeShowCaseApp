import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IAuthStackParams } from './AuthStackNavigator.interface';

const Stack = createStackNavigator<IAuthStackParams>();

export const AuthStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}>
      {/* <Stack.Screen
        name="LoginScreen"
        component={() => null}
        options={{
          headerShown: false
        }}
      /> */}
    </Stack.Navigator>
  );
};
