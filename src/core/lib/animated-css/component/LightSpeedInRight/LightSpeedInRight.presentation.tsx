import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ILightSpeedInRightPresentationProps } from './';

export const LightSpeedInRightPresentation: React.FC<ILightSpeedInRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
