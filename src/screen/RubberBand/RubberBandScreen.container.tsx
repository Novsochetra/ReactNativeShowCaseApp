import React from 'react';
import {
  IRubberBandScreenContainerProps,
  RubberBandScreenPresentation,
} from '.';

export const RubberBandScreen: React.FC<IRubberBandScreenContainerProps> = (
  props,
) => {
  return <RubberBandScreenPresentation {...props} />;
};
