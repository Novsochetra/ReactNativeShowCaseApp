import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateOutUpRightPresentationProps } from './';

export const RotateOutUpRightPresentation: React.FC<IRotateOutUpRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
