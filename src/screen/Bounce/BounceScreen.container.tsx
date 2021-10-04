import React from 'react';
import { IBounceScreenContainerProps, BounceScreenPresentation } from '.';

export const BounceScreen: React.FC<IBounceScreenContainerProps> = (props) => {
  return <BounceScreenPresentation {...props} />;
};
