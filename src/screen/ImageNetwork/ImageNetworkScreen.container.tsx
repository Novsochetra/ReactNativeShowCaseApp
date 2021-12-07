import React from 'react';
import { IImageNetworkScreenContainerProps, ImageNetworkScreenPresentation } from '.';

export const ImageNetworkScreen: React.FC<IImageNetworkScreenContainerProps> = (props) => {
  return <ImageNetworkScreenPresentation {...props} />;
};
