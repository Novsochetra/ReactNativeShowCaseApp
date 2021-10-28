import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBounceOutUpPresentationProps } from './';

export const BounceOutUpPresentation: React.FC<IBounceOutUpPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
