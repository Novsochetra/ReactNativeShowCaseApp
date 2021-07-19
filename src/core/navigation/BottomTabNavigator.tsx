import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ComponentStack, HomeStack } from './CustomStackContent';
import { IBottomTabParams } from './BottomTabNavigator.interface';
import { CustomBottomTabBar } from './navigationConfig';

const Tab = createBottomTabNavigator<IBottomTabParams>();

export function BottomTabNavigator(): React.ReactElement {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{}} />
      <Tab.Screen name="ComponentStack" component={ComponentStack} />
    </Tab.Navigator>
  );
}
