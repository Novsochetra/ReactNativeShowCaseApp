import React from 'react';
import {
  IJackInTheBoxScreenContainerProps,
  JackInTheBoxScreenPresentation,
} from '.';

export const JackInTheBoxScreen: React.FC<IJackInTheBoxScreenContainerProps> = (
  props,
) => {
  return <JackInTheBoxScreenPresentation {...props} />;
};
