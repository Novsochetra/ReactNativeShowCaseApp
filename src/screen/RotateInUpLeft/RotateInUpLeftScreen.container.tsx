import React from 'react';
import {
  IRotateInUpLeftScreenContainerProps,
  RotateInUpLeftScreenPresentation,
} from '.';

export const RotateInUpLeftScreen: React.FC<IRotateInUpLeftScreenContainerProps> =
  (props) => {
    return <RotateInUpLeftScreenPresentation {...props} />;
  };
