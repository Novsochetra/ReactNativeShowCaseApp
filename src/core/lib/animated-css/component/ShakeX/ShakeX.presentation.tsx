import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IShakeXPresentationProps } from './';

export const ShakeXPresentation: React.FC<IShakeXPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
