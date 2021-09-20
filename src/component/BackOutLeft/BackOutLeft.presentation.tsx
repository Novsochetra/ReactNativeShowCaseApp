import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackOutLeftPresentationProps } from './';

export const BackOutLeftPresentation: React.FC<IBackOutLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
