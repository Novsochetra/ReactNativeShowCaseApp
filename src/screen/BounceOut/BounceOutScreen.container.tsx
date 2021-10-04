import React from 'react';
import { IBounceOutScreenContainerProps, BounceOutScreenPresentation } from '.';

export const BounceOutScreen: React.FC<IBounceOutScreenContainerProps> = (props) => {
  return <BounceOutScreenPresentation {...props} />;
};
