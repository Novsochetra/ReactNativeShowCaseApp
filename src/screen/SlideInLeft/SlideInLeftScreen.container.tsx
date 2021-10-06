import React from 'react';
import {
  ISlideInLeftScreenContainerProps,
  SlideInLeftScreenPresentation,
} from '.';

export const SlideInLeftScreen: React.FC<ISlideInLeftScreenContainerProps> = (
  props,
) => {
  return <SlideInLeftScreenPresentation {...props} />;
};
