import React from 'react';
import { IBounceInDownScreenContainerProps, BounceInDownScreenPresentation } from '.';

export const BounceInDownScreen: React.FC<IBounceInDownScreenContainerProps> = (props) => {
  return <BounceInDownScreenPresentation {...props} />;
};
