import React from 'react';
import { IZoomOutUpScreenContainerProps, ZoomOutUpScreenPresentation } from '.';

export const ZoomOutUpScreen: React.FC<IZoomOutUpScreenContainerProps> = (props) => {
  return <ZoomOutUpScreenPresentation {...props} />;
};
