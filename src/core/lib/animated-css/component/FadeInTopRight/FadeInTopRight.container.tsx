import React from 'react';
import {
  IFadeInTopRightContainerProps,
  FadeInTopRightPresentation,
  Constant,
} from '.';

export const FadeInTopRight: React.FC<IFadeInTopRightContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  startPostionY = Constant.INITIAL_POSITION_Y,
}) => {
  return (
    <FadeInTopRightPresentation
      {...{
        delayInMS,
        durationInMS,
        startPostionX,
        startPostionY,
      }}>
      {children}
    </FadeInTopRightPresentation>
  );
};
