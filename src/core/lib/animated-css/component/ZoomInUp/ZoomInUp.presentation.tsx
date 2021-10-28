import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IZoomInUpPresentationProps } from './';

export const ZoomInUpPresentation: React.FC<IZoomInUpPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
