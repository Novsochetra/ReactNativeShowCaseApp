import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISlideInUpPresentationProps } from './';

export const SlideInUpPresentation: React.FC<ISlideInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
