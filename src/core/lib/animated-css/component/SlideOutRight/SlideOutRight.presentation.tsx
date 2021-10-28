import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { ISlideOutRightPresentationProps } from './';

export const SlideOutRightPresentation: React.FC<ISlideOutRightPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
