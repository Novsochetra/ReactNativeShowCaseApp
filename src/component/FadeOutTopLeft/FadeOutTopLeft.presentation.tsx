import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFadeOutTopLeftPresentationProps } from './';

export const FadeOutTopLeftPresentation: React.FC<IFadeOutTopLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
