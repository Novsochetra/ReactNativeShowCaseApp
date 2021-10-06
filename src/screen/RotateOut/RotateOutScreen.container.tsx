import React from 'react';
import { IRotateOutScreenContainerProps, RotateOutScreenPresentation } from '.';

export const RotateOutScreen: React.FC<IRotateOutScreenContainerProps> = (props) => {
  return <RotateOutScreenPresentation {...props} />;
};
