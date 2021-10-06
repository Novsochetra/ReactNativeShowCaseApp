import React from 'react';
import { IFadeOutScreenContainerProps, FadeOutScreenPresentation } from '.';

export const FadeOutScreen: React.FC<IFadeOutScreenContainerProps> = (props) => {
  return <FadeOutScreenPresentation {...props} />;
};
