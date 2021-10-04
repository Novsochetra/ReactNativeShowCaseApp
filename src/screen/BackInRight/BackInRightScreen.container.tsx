import React from 'react';
import { IBackInRightScreenContainerProps, BackInRightScreenPresentation } from '.';

export const BackInRightScreen: React.FC<IBackInRightScreenContainerProps> = (props) => {
  return <BackInRightScreenPresentation {...props} />;
};
