import React from 'react';
import {
  ISlideOutLeftScreenContainerProps,
  SlideOutLeftScreenPresentation,
} from '.';

export const SlideOutLeftScreen: React.FC<ISlideOutLeftScreenContainerProps> = (
  props,
) => {
  return <SlideOutLeftScreenPresentation {...props} />;
};
