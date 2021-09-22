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
import { Constant, IZoomOutUpContainerProps, ZoomOutUpPresentation } from '.';

export const ZoomOutUp: React.FC<IZoomOutUpContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const scale = useSharedValue(Constant.MAX_SCALE);
  const translateY = useSharedValue(Constant.INITIAL_POSITION_Y);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      scale.value = interpolate(
        translateY.value,
        [Constant.FINAL_POSITION_Y, Constant.INITIAL_POSITION_Y, 30],
        [Constant.MIN_SCALE, Constant.MAX_SCALE, 0.5],
      );

      opacity.value = interpolate(
        translateY.value,
        [Constant.FINAL_POSITION_Y, Constant.INITIAL_POSITION_Y, 30],
        [Constant.MIN_OPACITY, Constant.MAX_OPACITY, Constant.MAX_OPACITY],
      );

      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }, { translateY: translateY.value }],
      };
    },
  );

  useEffect(() => {
    translateY.value = withDelay(
      delayInMS,
      withSequence(
        withTiming(30, {
          duration: durationInMS,
        }),
        withTiming(Constant.FINAL_POSITION_Y, {
          duration: durationInMS,
        }),
      ),
    );
  }, []);

  return (
    <>
      <ZoomOutUpPresentation containerStyle={animatedStyle}>
        {children}
      </ZoomOutUpPresentation>
    </>
  );
};
