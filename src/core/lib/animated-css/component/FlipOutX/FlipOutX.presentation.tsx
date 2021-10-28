import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFlipOutXPresentationProps } from './';

export const FlipOutXPresentation: React.FC<IFlipOutXPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
