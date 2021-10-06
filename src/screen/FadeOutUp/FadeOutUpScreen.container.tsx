import React from 'react';
import { IFadeOutUpScreenContainerProps, FadeOutUpScreenPresentation } from '.';

export const FadeOutUpScreen: React.FC<IFadeOutUpScreenContainerProps> = (props) => {
  return <FadeOutUpScreenPresentation {...props} />;
};
