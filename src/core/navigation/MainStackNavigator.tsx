import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IMainStackNavigatorParams } from './MainStackNavigator.interface';
import { defaultNavigationStack } from './navigationConfig';
import { HomeScreen } from '@screen/Home/HomeScreen';
import { BounceScreen } from '@screen/Bounce';
import { FlashScreen } from '@screen/Flash';
import { PulseScreen } from '@screen/Pulse';
import { RubberBandScreen } from '@screen/RubberBand';
import { ShakeXScreen } from '@screen/ShakeX';
import { ShakeYScreen } from '@screen/ShakeY';
import { SwingScreen } from '@screen/Swing';
import { TadaScreen } from '@screen/Tada';
import { WobbleScreen } from '@screen/Wobble';
import { JelloScreen } from '@screen/Jello';
import { HeartBeatScreen } from '@screen/HeartBeat';
import { BackInDownScreen } from '@screen/BackInDown';
import { BackInLeftScreen } from '@screen/BackInLeft';
import { BackInRightScreen } from '@screen/BackInRight';
import { BackInUpScreen } from '@screen/BackInUp';
import { BackOutDownScreen } from '@screen/BackOutDown';
import { BackOutLeftScreen } from '@screen/BackOutLeft';
import { BackOutRightScreen } from '@screen/BackOutRight';
import { BackOutUpScreen } from '@screen/BackOutUp';
import { BounceInScreen } from '@screen/BounceIn';
import { BounceInDownScreen } from '@screen/BounceInDown';
import { BounceInDownLeftScreen } from '@screen/BounceInDownLeft';
import { BounceInRightScreen } from '@screen/BounceInRight';
import { BounceInUpScreen } from '@screen/BounceInUp';
import { BounceOutScreen } from '@screen/BounceOut';
import { BounceOutDownScreen } from '@screen/BounceOutDown';
import { BounceOutLeftScreen } from '@screen/BounceOutLeft';

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

      <Stack.Screen
        name="ShakeXScreen"
        component={ShakeXScreen}
        options={{ title: 'Shake X' }}
      />

      <Stack.Screen
        name="ShakeYScreen"
        component={ShakeYScreen}
        options={{ title: 'Shake Y' }}
      />

      <Stack.Screen
        name="SwingScreen"
        component={SwingScreen}
        options={{ title: 'Swing 🐤' }}
      />

      <Stack.Screen
        name="TadaScreen"
        component={TadaScreen}
        options={{ title: 'Tada 🛵' }}
      />

      <Stack.Screen
        name="WobbleScreen"
        component={WobbleScreen}
        options={{ title: 'Wobble ⚓️' }}
      />

      <Stack.Screen
        name="JelloScreen"
        component={JelloScreen}
        options={{ title: 'Jello' }}
      />

      <Stack.Screen
        name="HeartBeatScreen"
        component={HeartBeatScreen}
        options={{ title: 'Heart Beat' }}
      />

      <Stack.Screen
        name="BackInDownScreen"
        component={BackInDownScreen}
        options={{ title: 'BackInDown' }}
      />

      <Stack.Screen
        name="BackInLeftScreen"
        component={BackInLeftScreen}
        options={{ title: 'BackInLeft' }}
      />

      <Stack.Screen
        name="BackInRightScreen"
        component={BackInRightScreen}
        options={{ title: 'BackInRight' }}
      />

      <Stack.Screen
        name="BackInUpScreen"
        component={BackInUpScreen}
        options={{ title: 'BackInUp' }}
      />

      <Stack.Screen
        name="BackOutDownScreen"
        component={BackOutDownScreen}
        options={{ title: 'BackOutDown' }}
      />

      <Stack.Screen
        name="BackOutLeftScreen"
        component={BackOutLeftScreen}
        options={{ title: 'BackOutLeft' }}
      />

      <Stack.Screen
        name="BackOutRightScreen"
        component={BackOutRightScreen}
        options={{ title: 'BackOutRight' }}
      />

      <Stack.Screen
        name="BackOutUpScreen"
        component={BackOutUpScreen}
        options={{ title: 'BackOutUp' }}
      />

      <Stack.Screen
        name="BounceInScreen"
        component={BounceInScreen}
        options={{ title: 'BounceIn 🎾' }}
      />

      <Stack.Screen
        name="BounceInDownScreen"
        component={BounceInDownScreen}
        options={{ title: 'BounceInDown 🎾' }}
      />

      <Stack.Screen
        name="BounceInLeftScreen"
        component={BounceInDownLeftScreen}
        options={{ title: 'BounceInLeft 🎾' }}
      />

      <Stack.Screen
        name="BounceInRightScreen"
        component={BounceInRightScreen}
        options={{ title: 'BounceInRight 🎾' }}
      />

      <Stack.Screen
        name="BounceInUpScreen"
        component={BounceInUpScreen}
        options={{ title: 'BounceInUp 🎾' }}
      />

      <Stack.Screen
        name="BounceOutScreen"
        component={BounceOutScreen}
        options={{ title: 'BounceOut 🎾' }}
      />

      <Stack.Screen
        name="BounceOutDownScreen"
        component={BounceOutDownScreen}
        options={{ title: 'BounceOutDown 🎾' }}
      />

      <Stack.Screen
        name="BounceOutLeftScreen"
        component={BounceOutLeftScreen}
        options={{ title: 'BounceOutLeft 🎾' }}
      />
    </Stack.Navigator>
  );
};
