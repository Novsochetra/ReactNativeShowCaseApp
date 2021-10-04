import React from 'react';
import { IBackOutLeftScreenContainerProps, BackOutLeftScreenPresentation } from '.';

export const BackOutLeftScreen: React.FC<IBackOutLeftScreenContainerProps> = (props) => {
  return <BackOutLeftScreenPresentation {...props} />;
};
