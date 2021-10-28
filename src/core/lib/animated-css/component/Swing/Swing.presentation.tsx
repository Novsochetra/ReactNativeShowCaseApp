import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISwingPresentationProps } from './';

export const SwingPresentation: React.FC<ISwingPresentationProps> = (props) => {
  return (
    <Reanimated.View onLayout={props.onLayout} style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
