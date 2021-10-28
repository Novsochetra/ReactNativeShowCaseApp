import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IShakeYPresentationProps } from './';

export const ShakeYPresentation: React.FC<IShakeYPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
