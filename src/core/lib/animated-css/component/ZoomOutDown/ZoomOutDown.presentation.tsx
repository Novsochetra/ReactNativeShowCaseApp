import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IZoomOutDownPresentationProps } from './';

export const ZoomOutDownPresentation: React.FC<IZoomOutDownPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
