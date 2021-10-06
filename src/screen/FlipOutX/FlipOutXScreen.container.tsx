import React from 'react';
import { IFlipOutXScreenContainerProps, FlipOutXScreenPresentation } from '.';

export const FlipOutXScreen: React.FC<IFlipOutXScreenContainerProps> = (props) => {
  return <FlipOutXScreenPresentation {...props} />;
};
