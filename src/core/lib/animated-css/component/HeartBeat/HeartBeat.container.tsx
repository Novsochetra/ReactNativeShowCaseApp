/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { IHeartBeatContainerProps, HeartBeatPresentation, Constant } from '.';

export const HeartBeat: React.FC<IHeartBeatContainerProps> = ({
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
      withRepeat(
        withSequence(
          withTiming(Constant.MAX_SCALE, {
            duration: durationInMS,
            easing: EasingPreset.EASE_OUT_SINE,
          }),
          withTiming(Constant.MIN_SCALE, {
            duration: durationInMS,
            easing: EasingPreset.EASE_OUT_SINE,
          }),
        ),
        2,
      ),
    );
  }, []);
  return (
    <HeartBeatPresentation containerStyle={animatedStyle}>
      {children}
    </HeartBeatPresentation>
  );
};
