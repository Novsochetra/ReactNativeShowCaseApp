import React from 'react';
import { IThreeJSScreenContainerProps, ThreeJSScreenPresentation } from '.';

export const ThreeJSScreen: React.FC<IThreeJSScreenContainerProps> = (props) => {
  return <ThreeJSScreenPresentation {...props} />;
};
