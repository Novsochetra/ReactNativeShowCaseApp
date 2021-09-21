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
  IBounceOutUpContainerProps,
  BounceOutUpPresentation,
  Constant,
} from '.';

export const BounceOutUp: React.FC<IBounceOutUpContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MAX_SCALE);
  const translateY = useSharedValue(Constant.INITIAL_TRANSLATE_Y);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      opacity.value = interpolate(
        translateY.value,
        [Constant.INITIAL_TRANSLATE_Y, Constant.MAX_TRANSLATE_Y],
        [Constant.MAX_OPACITY, Constant.MIN_OPACITY],
      );

      return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
      };
    },
  );

  useEffect(() => {
    onAnimateTranslateY();
  }, []);

  const onAnimateTranslateY = () => {
    // the less value the more bouncing it will be
    const BOUNCING = 4;

    translateY.value = withDelay(
      delayInMS,
      withSequence(
        withSpring(Constant.INITIAL_TRANSLATE_Y, {
          damping: BOUNCING,
          restSpeedThreshold: 100,
          velocity: 250,
        }),
        withTiming(Constant.MAX_TRANSLATE_Y, {
          duration: Constant.DEFAULT_DURATION_IN_MS,
        }),
      ),
    );
  };

  return (
    <BounceOutUpPresentation containerStyle={animatedStyle}>
      {children}
    </BounceOutUpPresentation>
  );
};
