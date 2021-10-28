import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ITadaPresentationProps } from './';

export const TadaPresentation: React.FC<ITadaPresentationProps> = (props) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
