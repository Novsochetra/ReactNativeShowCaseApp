import React from 'react';
import {
  IBounceOutRightScreenContainerProps,
  BounceOutRightScreenPresentation,
} from '.';

export const BounceOutRightScreen: React.FC<IBounceOutRightScreenContainerProps> =
  (props) => {
    return <BounceOutRightScreenPresentation {...props} />;
  };
