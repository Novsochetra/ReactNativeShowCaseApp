import React from 'react';
import { IBounceInScreenContainerProps, BounceInScreenPresentation } from '.';

export const BounceInScreen: React.FC<IBounceInScreenContainerProps> = (
  props,
) => {
  return <BounceInScreenPresentation {...props} />;
};
