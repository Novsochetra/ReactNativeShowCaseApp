import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IHingePresentationProps } from './';

export const HingePresentation: React.FC<IHingePresentationProps> = (props) => {
  return (
    <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
