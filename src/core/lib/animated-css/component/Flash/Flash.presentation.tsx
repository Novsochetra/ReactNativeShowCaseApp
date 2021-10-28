import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IFlashPresentationProps } from './';

export const FlashPresentation: React.FC<IFlashPresentationProps> = (props) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
