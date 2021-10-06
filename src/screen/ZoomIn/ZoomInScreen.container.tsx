import React from 'react';
import { IZoomInScreenContainerProps, ZoomInScreenPresentation } from '.';

export const ZoomInScreen: React.FC<IZoomInScreenContainerProps> = (props) => {
  return <ZoomInScreenPresentation {...props} />;
};
