import React from 'react';
import {
  IBackOutDownScreenContainerProps,
  BackOutDownScreenPresentation,
} from '.';

export const BackOutDownScreen: React.FC<IBackOutDownScreenContainerProps> = (
  props,
) => {
  return <BackOutDownScreenPresentation {...props} />;
};
