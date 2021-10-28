import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackInUpPresentationProps } from './';

export const BackInUpPresentation: React.FC<IBackInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
