import React from 'react';
import {
  IFadeOutRightContainerProps,
  FadeOutRightPresentation,
  Constant,
} from '.';

export const FadeOutRight: React.FC<IFadeOutRightContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
}) => {
  return (
    <FadeOutRightPresentation
      {...{
        delayInMS,
        durationInMS,
        startPostionX,
      }}>
      {children}
    </FadeOutRightPresentation>
  );
};
