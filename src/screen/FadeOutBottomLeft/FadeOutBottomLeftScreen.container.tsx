import React from 'react';
import {
  IFadeOutBottomLeftScreenContainerProps,
  FadeOutBottomLeftScreenPresentation,
} from '.';

export const FadeOutBottomLeftScreen: React.FC<IFadeOutBottomLeftScreenContainerProps> =
  (props) => {
    return <FadeOutBottomLeftScreenPresentation {...props} />;
  };
