import React from 'react';
import {} from 'react-native';
import { IFadeOutBottomLeftPresentationProps } from './';
import Reanimated from 'react-native-reanimated';

export const FadeOutBottomLeftPresentation: React.FC<IFadeOutBottomLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
