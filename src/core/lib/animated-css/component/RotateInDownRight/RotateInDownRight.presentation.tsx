import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateInDownRightPresentationProps } from './';

export const RotateInDownRightPresentation: React.FC<IRotateInDownRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
