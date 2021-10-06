import React from 'react';
import { IFlipInXScreenContainerProps, FlipInXScreenPresentation } from '.';

export const FlipInXScreen: React.FC<IFlipInXScreenContainerProps> = (
  props,
) => {
  return <FlipInXScreenPresentation {...props} />;
};
