import React from 'react';
import { IBackInDownScreenContainerProps, BackInDownScreenPresentation } from '.';

export const BackInDownScreen: React.FC<IBackInDownScreenContainerProps> = (props) => {
  return <BackInDownScreenPresentation {...props} />;
};
