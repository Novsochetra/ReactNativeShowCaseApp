import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackInLeftPresentationProps } from './';

export const BackInLeftPresentation: React.FC<IBackInLeftPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
