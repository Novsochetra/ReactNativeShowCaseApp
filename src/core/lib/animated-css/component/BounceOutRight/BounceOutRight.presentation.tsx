import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBounceOutRightPresentationProps } from './';

export const BounceOutRightPresentation: React.FC<IBounceOutRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
