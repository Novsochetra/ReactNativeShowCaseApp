import React from 'react';
import { ISortableFlatListScreenContainerProps, SortableFlatListScreenPresentation } from '.';

export const SortableFlatListScreen: React.FC<ISortableFlatListScreenContainerProps> = (props) => {
  return <SortableFlatListScreenPresentation {...props} />;
};
