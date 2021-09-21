import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IZoomInDownPresentationProps } from './';

export const ZoomInDownPresentation: React.FC<IZoomInDownPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
