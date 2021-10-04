import React from 'react';
import { IShakeXScreenContainerProps, ShakeXScreenPresentation } from '.';

export const ShakeXScreen: React.FC<IShakeXScreenContainerProps> = (props) => {
  return <ShakeXScreenPresentation {...props} />;
};
