import React from 'react';
import { IFlashScreenContainerProps, FlashScreenPresentation } from '.';

export const FlashScreen: React.FC<IFlashScreenContainerProps> = (props) => {
  return <FlashScreenPresentation {...props} />;
};
