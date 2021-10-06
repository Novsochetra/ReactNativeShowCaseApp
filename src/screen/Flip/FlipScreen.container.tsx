import React from 'react';
import { IFlipScreenContainerProps, FlipScreenPresentation } from '.';

export const FlipScreen: React.FC<IFlipScreenContainerProps> = (props) => {
  return <FlipScreenPresentation {...props} />;
};
