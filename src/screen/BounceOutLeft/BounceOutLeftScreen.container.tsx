import React from 'react';
import {
  IBounceOutLeftScreenContainerProps,
  BounceOutLeftScreenPresentation,
} from '.';

export const BounceOutLeftScreen: React.FC<IBounceOutLeftScreenContainerProps> =
  (props) => {
    return <BounceOutLeftScreenPresentation {...props} />;
  };
