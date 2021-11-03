import React from 'react';
import { ITabItemContainerProps, TabItemPresentation } from '.';

export const TabItem: React.FC<ITabItemContainerProps> = (props) => {
  return <TabItemPresentation {...props} />;
};
