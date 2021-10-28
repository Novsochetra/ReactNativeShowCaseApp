import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ILightSpeedOutRightPresentationProps } from './';

export const LightSpeedOutRightPresentation: React.FC<ILightSpeedOutRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
