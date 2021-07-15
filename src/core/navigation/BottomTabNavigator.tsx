import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './CustomStackContent';
import { IBottomTabParams } from './BottomTabNavigator.interface';

const Tab = createBottomTabNavigator<IBottomTabParams>();

export default function BottomTabNavigator(): React.ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
}
