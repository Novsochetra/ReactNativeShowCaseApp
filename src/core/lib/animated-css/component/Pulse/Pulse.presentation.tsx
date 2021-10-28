import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IPulsePresentationProps } from './';

export const PulsePresentation: React.FC<IPulsePresentationProps> = (props) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
