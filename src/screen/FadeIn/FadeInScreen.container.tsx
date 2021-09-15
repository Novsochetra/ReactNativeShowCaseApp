import React from 'react';
import { IFadeInScreenContainerProps, FadeInScreenPresentation } from '.';

export const FadeInScreen: React.FC<IFadeInScreenContainerProps> = (props) => {
  return <FadeInScreenPresentation {...props} />;
};
