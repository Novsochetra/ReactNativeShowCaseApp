import React from 'react';
import {
  IZoomInLeftScreenContainerProps,
  ZoomInLeftScreenPresentation,
} from '.';

export const ZoomInLeftScreen: React.FC<IZoomInLeftScreenContainerProps> = (
  props,
) => {
  return <ZoomInLeftScreenPresentation {...props} />;
};
