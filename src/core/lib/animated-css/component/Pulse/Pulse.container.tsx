/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IPulseContainerProps, PulsePresentation } from '.';

export const Pulse: React.FC<IPulseContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const scale = useSharedValue(Constant.MIN_SCALE);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    scale.value = withDelay(
      delayInMS,
      withSequence(
        withTiming(Constant.MAX_SCALE, {
          duration: durationInMS,
        }),
        withTiming(Constant.MIN_SCALE, {
          duration: durationInMS,
        }),
      ),
    );
  }, []);

  return (
    <PulsePresentation containerStyle={animatedStyle}>
      {children}
    </PulsePresentation>
  );
};
