import React from 'react';
import { IRollInScreenContainerProps, RollInScreenPresentation } from '.';

export const RollInScreen: React.FC<IRollInScreenContainerProps> = (props) => {
  return <RollInScreenPresentation {...props} />;
};
