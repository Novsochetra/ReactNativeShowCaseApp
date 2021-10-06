import React from 'react';
import {
  IRotateInUpRightScreenContainerProps,
  RotateInUpRightScreenPresentation,
} from '.';

export const RotateInUpRightScreen: React.FC<IRotateInUpRightScreenContainerProps> =
  (props) => {
    return <RotateInUpRightScreenPresentation {...props} />;
  };
