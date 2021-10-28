import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IBouncePresentationProps } from './';

export const BouncePresentation: React.FC<IBouncePresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
