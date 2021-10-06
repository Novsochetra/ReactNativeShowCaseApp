import React from 'react';
import {
  IBounceInUpScreenContainerProps,
  BounceInUpScreenPresentation,
} from '.';

export const BounceInUpScreen: React.FC<IBounceInUpScreenContainerProps> = (
  props,
) => {
  return <BounceInUpScreenPresentation {...props} />;
};
