import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackOutRightPresentationProps } from './';

export const BackOutRightPresentation: React.FC<IBackOutRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
