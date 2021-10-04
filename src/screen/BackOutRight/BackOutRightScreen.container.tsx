import React from 'react';
import { IBackOutRightScreenContainerProps, BackOutRightScreenPresentation } from '.';

export const BackOutRightScreen: React.FC<IBackOutRightScreenContainerProps> = (props) => {
  return <BackOutRightScreenPresentation {...props} />;
};
