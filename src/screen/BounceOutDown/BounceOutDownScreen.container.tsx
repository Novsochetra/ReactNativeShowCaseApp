import React from 'react';
import {
  IBounceOutDownScreenContainerProps,
  BounceOutDownScreenPresentation,
} from '.';

export const BounceOutDownScreen: React.FC<IBounceOutDownScreenContainerProps> =
  (props) => {
    return <BounceOutDownScreenPresentation {...props} />;
  };
