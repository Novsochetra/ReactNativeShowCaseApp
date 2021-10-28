import React from 'react';
import {} from 'react-native';
import Reanimated from 'react-native-reanimated';
import { IJackInTheBoxPresentationProps } from './';

export const JackInTheBoxPresentation: React.FC<IJackInTheBoxPresentationProps> =
  (props) => {
    return (
      <Reanimated.View style={props.containerStyle}>
        {props.children}
      </Reanimated.View>
    );
  };
