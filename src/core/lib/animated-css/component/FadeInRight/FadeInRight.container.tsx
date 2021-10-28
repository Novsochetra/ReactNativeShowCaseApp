import React from 'react';
import {
  IFadeInRightContainerProps,
  FadeInRightPresentation,
  Constant,
} from '.';

export const FadeInRight: React.FC<IFadeInRightContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
}) => {
  return (
    <FadeInRightPresentation
      delayInMS={delayInMS}
      durationInMS={durationInMS}
      startPostionX={startPostionX}>
      {children}
    </FadeInRightPresentation>
  );
};
