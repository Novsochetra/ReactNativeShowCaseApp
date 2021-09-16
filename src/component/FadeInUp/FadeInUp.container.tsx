import React from 'react';
import { IFadeInUpContainerProps, FadeInUpPresentation, Constant } from '.';

export const FadeInUp: React.FC<IFadeInUpContainerProps> = ({
  delayInMS = 0,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionY = Constant.INITIAL_POSITION_Y,
  children,
}) => {
  return (
    <FadeInUpPresentation
      delayInMS={delayInMS}
      durationInMS={durationInMS}
      startPostionY={startPostionY}>
      {children}
    </FadeInUpPresentation>
  );
};
