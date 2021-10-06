import React from 'react';
import {
  IFadeOutDownScreenContainerProps,
  FadeOutDownScreenPresentation,
} from '.';

export const FadeOutDownScreen: React.FC<IFadeOutDownScreenContainerProps> = (
  props,
) => {
  return <FadeOutDownScreenPresentation {...props} />;
};
