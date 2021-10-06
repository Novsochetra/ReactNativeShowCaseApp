import React from 'react';
import { IFadeInDownScreenContainerProps, FadeInDownScreenPresentation } from '.';

export const FadeInDownScreen: React.FC<IFadeInDownScreenContainerProps> = (props) => {
  return <FadeInDownScreenPresentation {...props} />;
};
