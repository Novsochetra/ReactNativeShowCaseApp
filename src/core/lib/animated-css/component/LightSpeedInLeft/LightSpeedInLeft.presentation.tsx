import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ILightSpeedInLeftPresentationProps } from './';

export const LightSpeedInLeftPresentation: React.FC<ILightSpeedInLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
