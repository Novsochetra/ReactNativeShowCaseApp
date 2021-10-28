import React from 'react';
import Reanimated from 'react-native-reanimated';
import { IFadeInUpPresentationProps } from './';

export const FadeInUpPresentation: React.FC<IFadeInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
