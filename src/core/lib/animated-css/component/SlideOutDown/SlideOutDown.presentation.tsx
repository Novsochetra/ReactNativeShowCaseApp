import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISlideOutDownPresentationProps } from './';

export const SlideOutDownPresentation: React.FC<ISlideOutDownPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
