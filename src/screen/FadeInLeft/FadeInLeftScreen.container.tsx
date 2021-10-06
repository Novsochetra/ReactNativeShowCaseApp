import React from 'react';
import { IFadeInLeftScreenContainerProps, FadeInLeftScreenPresentation } from '.';

export const FadeInLeftScreen: React.FC<IFadeInLeftScreenContainerProps> = (props) => {
  return <FadeInLeftScreenPresentation {...props} />;
};
