import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISlideOutLeftPresentationProps } from './';

export const SlideOutLeftPresentation: React.FC<ISlideOutLeftPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
