import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ModalStackNavigator from './ModalStackNavigator';
import { IRootStackParamsList } from './RootNavigator.interface';

const Stack = createStackNavigator<IRootStackParamsList>();

export const RootNavigator = (): React.ReactElement => {
  // const { showLoading, shouldChooseLanguage } = useSelector(
  //   (state) => ({
  //     showLoading: !state.startApp.data || state.startApp.pending,
  //     shouldChooseLanguage: !state.setting.lang
  //   }),
  //   shallowEqual
  // )

  // if (false) {
  //   return <Text>Loading Screen</Text>
  // }

  return (
    <Stack.Navigator
      initialRouteName="ModalStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ModalStack" component={ModalStackNavigator} />
    </Stack.Navigator>
  );
};
