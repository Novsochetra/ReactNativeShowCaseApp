/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { EasingPreset } from '../../core/animation/EasingPreset';
import {
  Constant,
  ILightSpeedOutLeftContainerProps,
  LightSpeedOutLeftPresentation,
} from '.';

export const LightSpeedOutLeft: React.FC<ILightSpeedOutLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  finalPositionX = Constant.FINAL_TRANSLATE_X,
  preset = 'EASE_OUT_SINE',
}) => {
  const translateX = useSharedValue(Constant.INITIAL_TRANSLATE_X);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimatedStyleProp<ViewStyle> => {
      const skewX = interpolate(
        translateX.value,
        [Constant.INITIAL_TRANSLATE_X, finalPositionX],
        [Constant.MAX_SKEW_X, Constant.MIN_SKEW_X],
      );

      const opacity = interpolate(
        translateX.value,
        [Constant.INITIAL_TRANSLATE_X, finalPositionX],
        [Constant.MAX_OPACITY, Constant.MIN_OPACITY],
      );

      return {
        opacity,
        transform: [
          {
            translateX: translateX.value,
          },
          { skewX: `${skewX}rad` },
        ],
      };
    },
  );

  useEffect(() => {
    translateX.value = withDelay(
      delayInMS,
      withTiming(finalPositionX, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <LightSpeedOutLeftPresentation containerStyle={animatedStyle}>
      {children}
    </LightSpeedOutLeftPresentation>
  );
};
