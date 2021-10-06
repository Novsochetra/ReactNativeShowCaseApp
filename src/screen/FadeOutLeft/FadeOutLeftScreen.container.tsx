import React from 'react';
import {
  IFadeOutLeftScreenContainerProps,
  FadeOutLeftScreenPresentation,
} from '.';

export const FadeOutLeftScreen: React.FC<IFadeOutLeftScreenContainerProps> = (
  props,
) => {
  return <FadeOutLeftScreenPresentation {...props} />;
};
