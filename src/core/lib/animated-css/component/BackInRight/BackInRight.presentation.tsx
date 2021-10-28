import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBackInRightPresentationProps } from './';

export const BackInRightPresentation: React.FC<IBackInRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
