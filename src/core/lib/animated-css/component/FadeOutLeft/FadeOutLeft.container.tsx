import React from 'react';
import {
  IFadeOutLeftContainerProps,
  FadeOutLeftPresentation,
  Constant,
} from '.';

export const FadeOutLeft: React.FC<IFadeOutLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
}) => {
  return (
    <FadeOutLeftPresentation
      {...{
        children,
        delayInMS,
        durationInMS,
        startPostionX,
      }}>
      {children}
    </FadeOutLeftPresentation>
  );
};
