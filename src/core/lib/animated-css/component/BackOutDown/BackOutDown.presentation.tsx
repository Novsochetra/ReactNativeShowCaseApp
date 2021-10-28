import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackOutDownPresentationProps } from './';

export const BackOutDownPresentation: React.FC<IBackOutDownPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
