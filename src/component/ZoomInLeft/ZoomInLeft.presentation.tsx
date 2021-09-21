import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IZoomInLeftPresentationProps } from './';

export const ZoomInLeftPresentation: React.FC<IZoomInLeftPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
