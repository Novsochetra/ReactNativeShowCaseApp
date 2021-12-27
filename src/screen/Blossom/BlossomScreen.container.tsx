import React from 'react';
import { IBlossomScreenContainerProps, BlossomScreenPresentation } from '.';

export const BlossomScreen: React.FC<IBlossomScreenContainerProps> = (
  props,
) => {
  return <BlossomScreenPresentation {...props} />;
};
