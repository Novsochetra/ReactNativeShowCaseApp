import React from 'react';
import { IJelloScreenContainerProps, JelloScreenPresentation } from '.';

export const JelloScreen: React.FC<IJelloScreenContainerProps> = (props) => {
  return <JelloScreenPresentation {...props} />;
};
