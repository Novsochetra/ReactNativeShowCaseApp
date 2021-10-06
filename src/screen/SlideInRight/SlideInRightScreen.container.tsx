import React from 'react';
import {
  ISlideInRightScreenContainerProps,
  SlideInRightScreenPresentation,
} from '.';

export const SlideInRightScreen: React.FC<ISlideInRightScreenContainerProps> = (
  props,
) => {
  return <SlideInRightScreenPresentation {...props} />;
};
