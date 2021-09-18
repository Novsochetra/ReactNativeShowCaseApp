import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFlipInYPresentationProps } from './';

export const FlipInYPresentation: React.FC<IFlipInYPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
