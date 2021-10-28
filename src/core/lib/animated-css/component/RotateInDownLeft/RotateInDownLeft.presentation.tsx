import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateInDownLeftPresentationProps } from './';

export const RotateInDownLeftPresentation: React.FC<IRotateInDownLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
