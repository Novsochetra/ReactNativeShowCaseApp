import React from 'react';
import { IZoomInUpScreenContainerProps, ZoomInUpScreenPresentation } from '.';

export const ZoomInUpScreen: React.FC<IZoomInUpScreenContainerProps> = (props) => {
  return <ZoomInUpScreenPresentation {...props} />;
};
