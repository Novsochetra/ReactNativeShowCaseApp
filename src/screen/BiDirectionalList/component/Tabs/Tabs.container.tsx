import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { ITabsContainerProps, TabsPresentation } from '.';

export const Tabs = forwardRef<ScrollView, ITabsContainerProps>(
  (props, ref) => {
    return <TabsPresentation {...props} ref={ref} />;
  },
);
