import React from 'react';
import { IFadeInContainerProps, FadeInPresentation } from '.';

export const FadeIn: React.FC<IFadeInContainerProps> = (props) => {
  return <FadeInPresentation {...props} />;
};
