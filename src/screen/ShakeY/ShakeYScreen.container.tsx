import React from 'react';
import { IShakeYScreenContainerProps, ShakeYScreenPresentation } from '.';

export const ShakeYScreen: React.FC<IShakeYScreenContainerProps> = (props) => {
  return <ShakeYScreenPresentation {...props} />;
};
