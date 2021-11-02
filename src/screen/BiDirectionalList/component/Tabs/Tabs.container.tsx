import React, { useRef } from 'react';
import { ITabsContainerProps, TabsPresentation, TAB_MENU } from '.';

export const Tabs: React.FC<ITabsContainerProps> = ({ scrollY }) => {
  const scrollViewRef = useRef(null);

  return <TabsPresentation ref={scrollViewRef} data={TAB_MENU} />;
};
