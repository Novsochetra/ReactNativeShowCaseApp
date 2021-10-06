import React from 'react';
import {
  ILightSpeedInRightScreenContainerProps,
  LightSpeedInRightScreenPresentation,
} from '.';

export const LightSpeedInRightScreen: React.FC<ILightSpeedInRightScreenContainerProps> =
  (props) => {
    return <LightSpeedInRightScreenPresentation {...props} />;
  };
