import React from 'react';
import { IFadeInUpScreenContainerProps, FadeInUpScreenPresentation } from '.';

export const FadeInUpScreen: React.FC<IFadeInUpScreenContainerProps> = (
  props,
) => {
  return <FadeInUpScreenPresentation {...props} />;
};
