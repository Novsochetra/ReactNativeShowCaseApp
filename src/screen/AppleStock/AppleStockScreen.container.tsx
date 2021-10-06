import React from 'react';
import {
  IAppleStockScreenContainerProps,
  AppleStockScreenPresentation,
} from '.';

export const AppleStockScreen: React.FC<IAppleStockScreenContainerProps> = (
  props,
) => {
  return <AppleStockScreenPresentation {...props} />;
};
