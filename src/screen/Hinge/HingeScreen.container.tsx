import React from 'react';
import { IHingeScreenContainerProps, HingeScreenPresentation } from '.';

export const HingeScreen: React.FC<IHingeScreenContainerProps> = (props) => {
  return <HingeScreenPresentation {...props} />;
};
