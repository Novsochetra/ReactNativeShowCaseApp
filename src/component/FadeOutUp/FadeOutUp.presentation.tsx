import React from 'react';
import {} from 'react-native';
import { IFadeOutUpPresentationProps } from './';
import Reanimated from 'react-native-reanimated';

export const FadeOutUpPresentation: React.FC<IFadeOutUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
