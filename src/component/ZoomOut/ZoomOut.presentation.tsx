import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IZoomOutPresentationProps } from './';

export const ZoomOutPresentation: React.FC<IZoomOutPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
