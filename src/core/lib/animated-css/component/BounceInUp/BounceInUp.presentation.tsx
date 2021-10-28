import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBounceInUpPresentationProps } from './';

export const BounceInUpPresentation: React.FC<IBounceInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
