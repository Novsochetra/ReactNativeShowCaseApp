import React from 'react';
import {
  ISlideInDownScreenContainerProps,
  SlideInDownScreenPresentation,
} from '.';

export const SlideInDownScreen: React.FC<ISlideInDownScreenContainerProps> = (
  props,
) => {
  return <SlideInDownScreenPresentation {...props} />;
};
