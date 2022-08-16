import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './AuthStackNavigator';
import { MainStackNavigator } from './MainStackNavigator';
import { IModalStackNavigatorParams } from './ModalStackNavigator.interface';
// import { YouTubePlayerScreen } from '@screens/youtube/YoutubePlayerScreen'

const Stack = createStackNavigator<IModalStackNavigatorParams>();

const ModalStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}>
      <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      <Stack.Screen name="MainStack" component={MainStackNavigator} />
    </Stack.Navigator>
  );
};

export default ModalStackNavigator;
