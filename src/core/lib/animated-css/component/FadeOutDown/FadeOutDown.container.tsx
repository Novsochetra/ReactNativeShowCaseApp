import React from 'react';
import {
  IFadeOutDownContainerProps,
  FadeOutDownPresentation,
  Constant,
} from '.';

export const FadeOutDown: React.FC<IFadeOutDownContainerProps> = ({
  delayInMS = 0,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionY = Constant.INITIAL_POSITION_Y,
  children,
}) => {
  return (
    <FadeOutDownPresentation
      {...{
        delayInMS,
        durationInMS,
        startPostionY,
      }}>
      {children}
    </FadeOutDownPresentation>
  );
};
