import React from 'react';
import { ISlideOutDownScreenContainerProps, SlideOutDownScreenPresentation } from '.';

export const SlideOutDownScreen: React.FC<ISlideOutDownScreenContainerProps> = (props) => {
  return <SlideOutDownScreenPresentation {...props} />;
};
