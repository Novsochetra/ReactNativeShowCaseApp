import React from 'react';
import { IFadeInContainerProps, FadeInPresentation, Constant } from '.';

export const FadeIn: React.FC<IFadeInContainerProps> = ({
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  children,
}) => {
  return (
    <FadeInPresentation delayInMS={delayInMS} durationInMS={durationInMS}>
      {children}
    </FadeInPresentation>
  );
};
