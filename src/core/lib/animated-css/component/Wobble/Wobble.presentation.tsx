import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IWobblePresentationProps } from './';

export const WobblePresentation: React.FC<IWobblePresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
