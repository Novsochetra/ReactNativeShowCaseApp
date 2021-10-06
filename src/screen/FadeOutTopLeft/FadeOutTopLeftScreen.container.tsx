import React from 'react';
import { IFadeOutTopLeftScreenContainerProps, FadeOutTopLeftScreenPresentation } from '.';

export const FadeOutTopLeftScreen: React.FC<IFadeOutTopLeftScreenContainerProps> = (props) => {
  return <FadeOutTopLeftScreenPresentation {...props} />;
};
