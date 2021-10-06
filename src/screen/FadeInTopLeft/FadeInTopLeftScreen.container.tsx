import React from 'react';
import { IFadeInTopLeftScreenContainerProps, FadeInTopLeftScreenPresentation } from '.';

export const FadeInTopLeftScreen: React.FC<IFadeInTopLeftScreenContainerProps> = (props) => {
  return <FadeInTopLeftScreenPresentation {...props} />;
};
