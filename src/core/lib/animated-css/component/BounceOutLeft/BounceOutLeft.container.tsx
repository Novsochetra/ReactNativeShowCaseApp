/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  IBounceOutLeftContainerProps,
  BounceOutLeftPresentation,
  Constant,
} from '.';

export const BounceOutLeft: React.FC<IBounceOutLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MAX_SCALE);
  const translateX = useSharedValue(Constant.INITIAL_TRANSLATE_X);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      opacity.value = interpolate(
        translateX.value,
        [Constant.INITIAL_TRANSLATE_X, Constant.MAX_TRANSLATE_X],
        [Constant.MAX_OPACITY, Constant.MIN_OPACITY],
      );

      return {
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }],
      };
    },
  );

  useEffect(() => {
    onAnimateTranslateY();
  }, []);

  const onAnimateTranslateY = () => {
    // the less value the more bouncing it will be
    const BOUNCING = 4;

    translateX.value = withDelay(
      delayInMS,
      withSequence(
        withSpring(Constant.INITIAL_TRANSLATE_X, {
          damping: BOUNCING,
          restSpeedThreshold: 100,
          velocity: 250,
        }),
        withTiming(Constant.MAX_TRANSLATE_X, {
          duration: Constant.DEFAULT_DURATION_IN_MS,
        }),
      ),
    );
  };

  return (
    <BounceOutLeftPresentation containerStyle={animatedStyle}>
      {children}
    </BounceOutLeftPresentation>
  );
};
