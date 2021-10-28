/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IRubberBandContainerProps, RubberBandPresentation } from '.';

export const RubberBand: React.FC<IRubberBandContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const scaleX = useSharedValue(Constant.MIN_SCALE_X);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleX: scaleX.value }],
    };
  });

  useEffect(() => {
    scaleX.value = withDelay(
      delayInMS,
      withSequence(
        withTiming(Constant.MAX_SCALE_X, {
          duration: Constant.DEFAULT_DURATION_IN_MS,
          easing: EasingPreset.EASE_OUT_CIRC,
        }),
        withSpring(Constant.MIN_SCALE_X, {
          damping: Constant.DAMPING,
          restSpeedThreshold: Constant.REST_SPEED_THRESHOLD,
        }),
      ),
    );
  }, []);

  return (
    <RubberBandPresentation containerStyle={animatedStyle}>
      {children}
    </RubberBandPresentation>
  );
};
