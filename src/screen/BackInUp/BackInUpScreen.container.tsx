import React from 'react';
import { IBackInUpScreenContainerProps, BackInUpScreenPresentation } from '.';

export const BackInUpScreen: React.FC<IBackInUpScreenContainerProps> = (props) => {
  return <BackInUpScreenPresentation {...props} />;
};
