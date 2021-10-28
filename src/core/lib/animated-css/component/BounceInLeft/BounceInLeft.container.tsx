/* eslint-disable react-hooks/exhaustive-deps */
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
  IBounceInLeftContainerProps,
  BounceInLeftPresentation,
  Constant,
  BouncPreset,
} from '.';

export const BounceInLeft: React.FC<IBounceInLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  initialPositionX = Constant.INITIAL_POSITION_X,
  type = 'less',
}) => {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(initialPositionX);
  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }],
      };
    },
  );

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: Constant.DEFAULT_DURATION_IN_MS,
      }),
    );

    translateX.value = withDelay(
      delayInMS,
      withSpring(Constant.FINAL_POSITION_X, BouncPreset[type]),
    );
  }, []);

  return (
    <BounceInLeftPresentation containerStyle={animatedStyle}>
      {children}
    </BounceInLeftPresentation>
  );
};
