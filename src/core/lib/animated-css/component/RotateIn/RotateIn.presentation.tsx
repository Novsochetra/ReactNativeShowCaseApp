import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateInPresentationProps } from './';

export const RotateInPresentation: React.FC<IRotateInPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
