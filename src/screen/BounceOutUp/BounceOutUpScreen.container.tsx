import React from 'react';
import { IBounceOutUpScreenContainerProps, BounceOutUpScreenPresentation } from '.';

export const BounceOutUpScreen: React.FC<IBounceOutUpScreenContainerProps> = (props) => {
  return <BounceOutUpScreenPresentation {...props} />;
};
