import React from 'react';
import { IFlipOutYScreenContainerProps, FlipOutYScreenPresentation } from '.';

export const FlipOutYScreen: React.FC<IFlipOutYScreenContainerProps> = (
  props,
) => {
  return <FlipOutYScreenPresentation {...props} />;
};
