import React from 'react';
import {
  IBackInLeftScreenContainerProps,
  BackInLeftScreenPresentation,
} from '.';

export const BackInLeftScreen: React.FC<IBackInLeftScreenContainerProps> = (
  props,
) => {
  return <BackInLeftScreenPresentation {...props} />;
};
