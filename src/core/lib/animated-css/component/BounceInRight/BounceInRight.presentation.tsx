import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBounceInRightPresentationProps } from './';

export const BounceInRightPresentation: React.FC<IBounceInRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
