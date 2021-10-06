import React from 'react';
import {
  IRotateInDownRightScreenContainerProps,
  RotateInDownRightScreenPresentation,
} from '.';

export const RotateInDownRightScreen: React.FC<IRotateInDownRightScreenContainerProps> =
  (props) => {
    return <RotateInDownRightScreenPresentation {...props} />;
  };
