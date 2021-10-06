import React from 'react';
import {
  IZoomOutDownScreenContainerProps,
  ZoomOutDownScreenPresentation,
} from '.';

export const ZoomOutDownScreen: React.FC<IZoomOutDownScreenContainerProps> = (
  props,
) => {
  return <ZoomOutDownScreenPresentation {...props} />;
};
