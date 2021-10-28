/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Constant,
  IJackInTheBoxContainerProps,
  JackInTheBoxPresentation,
} from '.';

export const JackInTheBox: React.FC<IJackInTheBoxContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'LINEAR',
}) => {
  const scale = useSharedValue(Constant.MIN_SCALE);
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const rotationZ = useSharedValue(Constant.MIN_ROTATION_Z);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      return {
        opacity: opacity.value,
        transform: [
          { scale: scale.value },
          { rotateZ: `${rotationZ.value}rad` },
        ],
      };
    },
  );

  useEffect(() => {
    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_SCALE, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );

    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
    // export const BouncPreset = {
    //   less: {
    //     damping: 4,
    //     restSpeedThreshold: 0.001,
    //   },
    //   medium: {
    //     damping: 3,
    //     restSpeedThreshold: 0.01,
    //   },
    //   high: {
    //     damping: 2,
    //     restSpeedThreshold: 0.1,
    //   },
    // };
    rotationZ.value = withDelay(
      delayInMS,
      withSpring(Constant.MAX_ROTATION_Z, {
        damping: 3,
        restSpeedThreshold: 0.01,
      }),
    );
  }, []);
  return (
    <JackInTheBoxPresentation containerStyle={animatedStyle}>
      {children}
    </JackInTheBoxPresentation>
  );
};
