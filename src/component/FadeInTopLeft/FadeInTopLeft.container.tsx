import React from 'react';
import {
  IFadeInTopLeftContainerProps,
  FadeInTopLeftPresentation,
  Constant,
} from '.';

export const FadeInTopLeft: React.FC<IFadeInTopLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  startPostionY = Constant.INITIAL_POSITION_Y,
}) => {
  return (
    <FadeInTopLeftPresentation
      {...{ delayInMS, durationInMS, startPostionX, startPostionY }}>
      {children}
    </FadeInTopLeftPresentation>
  );
};
