import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IRotateOutUpLeftPresentationProps } from './';

export const RotateOutUpLeftPresentation: React.FC<IRotateOutUpLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
