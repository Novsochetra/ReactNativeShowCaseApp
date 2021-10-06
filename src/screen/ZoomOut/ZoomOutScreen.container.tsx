import React from 'react';
import { IZoomOutScreenContainerProps, ZoomOutScreenPresentation } from '.';

export const ZoomOutScreen: React.FC<IZoomOutScreenContainerProps> = (props) => {
  return <ZoomOutScreenPresentation {...props} />;
};
