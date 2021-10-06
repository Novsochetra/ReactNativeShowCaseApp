import React from 'react';
import {
  IRotateOutDownRightScreenContainerProps,
  RotateOutDownRightScreenPresentation,
} from '.';

export const RotateOutDownRightScreen: React.FC<IRotateOutDownRightScreenContainerProps> =
  (props) => {
    return <RotateOutDownRightScreenPresentation {...props} />;
  };
