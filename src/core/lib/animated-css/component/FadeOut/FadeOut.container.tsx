import React from 'react';
import { IFadeOutContainerProps, FadeOutPresentation, Constant } from '.';

export const FadeOut: React.FC<IFadeOutContainerProps> = ({
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  children,
}) => {
  return (
    <FadeOutPresentation
      {...{
        delayInMS,
        durationInMS,
      }}>
      {children}
    </FadeOutPresentation>
  );
};
