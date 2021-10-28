import React from 'react';
import {} from 'react-native';
import { IFadeOutTopRightPresentationProps } from './';
import Reanimated from 'react-native-reanimated';

export const FadeOutTopRightPresentation: React.FC<IFadeOutTopRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
