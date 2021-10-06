import React from 'react';
import { IRollOutScreenContainerProps, RollOutScreenPresentation } from '.';

export const RollOutScreen: React.FC<IRollOutScreenContainerProps> = (props) => {
  return <RollOutScreenPresentation {...props} />;
};
