import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBounceInLeftPresentationProps } from './';

export const BounceInLeftPresentation: React.FC<IBounceInLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
