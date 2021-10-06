import React from 'react';
import {
  IFadeInBottomRightScreenContainerProps,
  FadeInBottomRightScreenPresentation,
} from '.';

export const FadeInBottomRightScreen: React.FC<IFadeInBottomRightScreenContainerProps> =
  (props) => {
    return <FadeInBottomRightScreenPresentation {...props} />;
  };
