import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateInUpRightPresentationProps } from './';

export const RotateInUpRightPresentation: React.FC<IRotateInUpRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
