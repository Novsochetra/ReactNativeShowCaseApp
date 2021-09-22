/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {
  Constant,
  IZoomOutLeftContainerProps,
  ZoomOutLeftPresentation,
} from '.';

export const ZoomOutLeft: React.FC<IZoomOutLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const scale = useSharedValue(Constant.MAX_SCALE);
  const translateX = useSharedValue(Constant.INITIAL_POSITION_X);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      scale.value = interpolate(
        translateX.value,
        [Constant.FINAL_POSITION_X, Constant.INITIAL_POSITION_X, 30],
        [Constant.MIN_SCALE, Constant.MAX_SCALE, 0.5],
      );

      opacity.value = interpolate(
        translateX.value,
        [Constant.FINAL_POSITION_X, Constant.INITIAL_POSITION_X, 30],
        [Constant.MIN_OPACITY, Constant.MAX_OPACITY, Constant.MAX_OPACITY],
      );

      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }, { translateX: translateX.value }],
      };
    },
  );

  useEffect(() => {
    translateX.value = withDelay(
      delayInMS,
      withSequence(
        withTiming(30, {
          duration: durationInMS,
        }),
        withTiming(Constant.FINAL_POSITION_X, {
          duration: durationInMS,
        }),
      ),
    );
  }, []);

  return (
    <ZoomOutLeftPresentation containerStyle={animatedStyle}>
      {children}
    </ZoomOutLeftPresentation>
  );
};
