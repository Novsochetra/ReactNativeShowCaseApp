import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IHeartBeatPresentationProps } from './';

export const HeartBeatPresentation: React.FC<IHeartBeatPresentationProps> = (
  props,
) => {
  return (
    <Reanimated.View style={props.containerStyle}>
      {props.children}
    </Reanimated.View>
  );
};
