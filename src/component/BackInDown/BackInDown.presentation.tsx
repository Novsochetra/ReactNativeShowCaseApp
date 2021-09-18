import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackInDownPresentationProps } from './';

export const BackInDownPresentation: React.FC<IBackInDownPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
