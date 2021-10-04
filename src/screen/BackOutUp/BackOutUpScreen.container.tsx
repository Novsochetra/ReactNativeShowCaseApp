import React from 'react';
import { IBackOutUpScreenContainerProps, BackOutUpScreenPresentation } from '.';

export const BackOutUpScreen: React.FC<IBackOutUpScreenContainerProps> = (props) => {
  return <BackOutUpScreenPresentation {...props} />;
};
