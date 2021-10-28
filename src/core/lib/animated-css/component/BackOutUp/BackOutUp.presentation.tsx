import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackOutUpPresentationProps } from './';

export const BackOutUpPresentation: React.FC<IBackOutUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
