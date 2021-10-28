import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISlideOutUpPresentationProps } from './';

export const SlideOutUpPresentation: React.FC<ISlideOutUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
