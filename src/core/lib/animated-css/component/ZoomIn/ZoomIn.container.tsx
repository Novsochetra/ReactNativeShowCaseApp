/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { EasingPreset } from '../../core/animation/EasingPreset';
import { Constant, IZoomInContainerProps, ZoomInPresentation } from '.';

export const ZoomIn: React.FC<IZoomInContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'LINEAR',
}) => {
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const scale = useSharedValue(Constant.MIN_SCALE);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );

    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_SCALE, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <ZoomInPresentation containerStyle={animatedStyle}>
      {children}
    </ZoomInPresentation>
  );
};
