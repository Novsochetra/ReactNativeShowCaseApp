import React from 'react';
import { IBounceInRightScreenContainerProps, BounceInRightScreenPresentation } from '.';

export const BounceInRightScreen: React.FC<IBounceInRightScreenContainerProps> = (props) => {
  return <BounceInRightScreenPresentation {...props} />;
};
