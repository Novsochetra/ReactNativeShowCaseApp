import React from 'react';
import {
  IFadeInTopRightScreenContainerProps,
  FadeInTopRightScreenPresentation,
} from '.';

export const FadeInTopRightScreen: React.FC<IFadeInTopRightScreenContainerProps> =
  (props) => {
    return <FadeInTopRightScreenPresentation {...props} />;
  };
