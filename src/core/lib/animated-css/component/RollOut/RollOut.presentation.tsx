import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRollOutPresentationProps } from './';

export const RollOutPresentation: React.FC<IRollOutPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
