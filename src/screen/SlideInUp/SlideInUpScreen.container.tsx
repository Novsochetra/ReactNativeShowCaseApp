import React from 'react';
import { ISlideInUpScreenContainerProps, SlideInUpScreenPresentation } from '.';

export const SlideInUpScreen: React.FC<ISlideInUpScreenContainerProps> = (
  props,
) => {
  return <SlideInUpScreenPresentation {...props} />;
};
