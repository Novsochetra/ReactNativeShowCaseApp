import React from 'react';
import { IFadeInDownContainerProps, FadeInDownPresentation, Constant } from '.';

export const FadeInDown: React.FC<IFadeInDownContainerProps> = ({
  delayInMS = 0,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionY = Constant.INITIAL_POSITION_Y,
  children,
}) => {
  return (
    <FadeInDownPresentation
      delayInMS={delayInMS}
      durationInMS={durationInMS}
      startPostionY={startPostionY}>
      {children}
    </FadeInDownPresentation>
  );
};
