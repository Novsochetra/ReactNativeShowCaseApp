import React from 'react';
import { IRotateInScreenContainerProps, RotateInScreenPresentation } from '.';

export const RotateInScreen: React.FC<IRotateInScreenContainerProps> = (
  props,
) => {
  return <RotateInScreenPresentation {...props} />;
};
