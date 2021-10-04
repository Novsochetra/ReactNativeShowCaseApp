import React from 'react';
import { ITadaScreenContainerProps, TadaScreenPresentation } from '.';

export const TadaScreen: React.FC<ITadaScreenContainerProps> = (props) => {
  return <TadaScreenPresentation {...props} />;
};
