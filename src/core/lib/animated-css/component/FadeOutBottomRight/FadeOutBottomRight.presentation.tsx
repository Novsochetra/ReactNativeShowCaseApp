import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFadeOutBottomRightPresentationProps } from './';

export const FadeOutBottomRightPresentation: React.FC<IFadeOutBottomRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
