import React from 'react';
import {
  ISlideOutRightScreenContainerProps,
  SlideOutRightScreenPresentation,
} from '.';

export const SlideOutRightScreen: React.FC<ISlideOutRightScreenContainerProps> =
  (props) => {
    return <SlideOutRightScreenPresentation {...props} />;
  };
