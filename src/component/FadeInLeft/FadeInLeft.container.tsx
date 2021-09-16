import React from 'react';
import { IFadeInLeftContainerProps, FadeInLeftPresentation, Constant } from '.';

export const FadeInLeft: React.FC<IFadeInLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
}) => {
  return (
    <FadeInLeftPresentation
      delayInMS={delayInMS}
      durationInMS={durationInMS}
      startPostionX={startPostionX}>
      {children}
    </FadeInLeftPresentation>
  );
};
