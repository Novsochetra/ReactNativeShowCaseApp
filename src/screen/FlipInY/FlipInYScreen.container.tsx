import React from 'react';
import { IFlipInYScreenContainerProps, FlipInYScreenPresentation } from '.';

export const FlipInYScreen: React.FC<IFlipInYScreenContainerProps> = (
  props,
) => {
  return <FlipInYScreenPresentation {...props} />;
};
