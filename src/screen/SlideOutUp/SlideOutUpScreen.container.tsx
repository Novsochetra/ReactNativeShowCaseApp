import React from 'react';
import {
  ISlideOutUpScreenContainerProps,
  SlideOutUpScreenPresentation,
} from '.';

export const SlideOutUpScreen: React.FC<ISlideOutUpScreenContainerProps> = (
  props,
) => {
  return <SlideOutUpScreenPresentation {...props} />;
};
