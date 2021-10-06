import React from 'react';
import {
  IZoomInDownScreenContainerProps,
  ZoomInDownScreenPresentation,
} from '.';

export const ZoomInDownScreen: React.FC<IZoomInDownScreenContainerProps> = (
  props,
) => {
  return <ZoomInDownScreenPresentation {...props} />;
};
