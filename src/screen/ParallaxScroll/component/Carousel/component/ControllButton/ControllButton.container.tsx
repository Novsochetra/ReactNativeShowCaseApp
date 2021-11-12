import React from 'react';
import { IControllButtonContainerProps, ControllButtonPresentation } from '.';

export const ControllButton: React.FC<IControllButtonContainerProps> = (
  props,
) => {
  return <ControllButtonPresentation {...props} />;
};
