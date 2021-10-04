import React from 'react';
import { IPulseScreenContainerProps, PulseScreenPresentation } from '.';

export const PulseScreen: React.FC<IPulseScreenContainerProps> = (props) => {
  return <PulseScreenPresentation {...props} />;
};
