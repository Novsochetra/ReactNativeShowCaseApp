import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IJelloPresentationProps } from './';

export const JelloPresentation: React.FC<IJelloPresentationProps> = (props) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
