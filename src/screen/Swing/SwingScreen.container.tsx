import React from 'react';
import { ISwingScreenContainerProps, SwingScreenPresentation } from '.';

export const SwingScreen: React.FC<ISwingScreenContainerProps> = (props) => {
  return <SwingScreenPresentation {...props} />;
};
