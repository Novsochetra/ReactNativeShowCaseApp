import React from 'react';
import { IWobbleScreenContainerProps, WobbleScreenPresentation } from '.';

export const WobbleScreen: React.FC<IWobbleScreenContainerProps> = (props) => {
  return <WobbleScreenPresentation {...props} />;
};
