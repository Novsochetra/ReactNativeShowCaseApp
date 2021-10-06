import React from 'react';
import {
  IRotateInDownLeftScreenContainerProps,
  RotateInDownLeftScreenPresentation,
} from '.';

export const RotateInDownLeftScreen: React.FC<IRotateInDownLeftScreenContainerProps> =
  (props) => {
    return <RotateInDownLeftScreenPresentation {...props} />;
  };
