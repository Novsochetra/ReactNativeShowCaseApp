import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFlipInXPresentationProps } from './';

export const FlipInXPresentation: React.FC<IFlipInXPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
