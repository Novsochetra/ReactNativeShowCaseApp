import React from 'react';
import {
  IFadeInBottomLeftContainerProps,
  FadeInBottomLeftPresentation,
  Constant,
} from '.';

export const FadeInBottomLeft: React.FC<IFadeInBottomLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  startPostionY = Constant.INITIAL_POSITION_Y,
}) => {
  return (
    <FadeInBottomLeftPresentation
      {...{
        delayInMS,
        durationInMS,
        startPostionX,
        startPostionY,
      }}>
      {children}
    </FadeInBottomLeftPresentation>
  );
};
