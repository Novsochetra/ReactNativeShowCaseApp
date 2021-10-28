import React from 'react';
import {
  IFadeInBottomRightContainerProps,
  FadeInBottomRightPresentation,
  Constant,
} from '.';

export const FadeInBottomRight: React.FC<IFadeInBottomRightContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  startPostionY = Constant.INITIAL_POSITION_Y,
}) => {
  return (
    <FadeInBottomRightPresentation
      {...{
        delayInMS,
        durationInMS,
        startPostionX,
        startPostionY,
      }}>
      {children}
    </FadeInBottomRightPresentation>
  );
};
