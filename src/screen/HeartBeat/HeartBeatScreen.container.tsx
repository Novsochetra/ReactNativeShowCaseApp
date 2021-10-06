import React from 'react';
import { IHeartBeatScreenContainerProps, HeartBeatScreenPresentation } from '.';

export const HeartBeatScreen: React.FC<IHeartBeatScreenContainerProps> = (
  props,
) => {
  return <HeartBeatScreenPresentation {...props} />;
};
