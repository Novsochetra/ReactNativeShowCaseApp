import React from 'react';
import { IAppleNewsScreenContainerProps, AppleNewsScreenPresentation } from '.';

export const AppleNewsScreen: React.FC<IAppleNewsScreenContainerProps> = (
  props,
) => {
  return <AppleNewsScreenPresentation {...props} />;
};
