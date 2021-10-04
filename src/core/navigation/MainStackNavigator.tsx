import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { defaultNavigationStack } from './navigationConfig';
import { HomeScreen } from '@screen/Home/HomeScreen';
import { BounceScreen } from '@screen/Bounce';
import { FlashScreen } from '@screen/Flash';
import { PulseScreen } from '@screen/Pulse';
import { RubberBandScreen } from '@screen/RubberBand';

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
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="BounceScreen"
        component={BounceScreen}
        options={{ title: 'Bounce' }}
      />

      <Stack.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{ title: 'Flash ⚡️' }}
      />

      <Stack.Screen
        name="PulseScreen"
        component={PulseScreen}
        options={{ title: 'Pulse' }}
      />

      <Stack.Screen
        name="RubberBandScreen"
        component={RubberBandScreen}
        options={{ title: 'Rubber Band 🧼' }}
      />
    </Stack.Navigator>
  );
};
