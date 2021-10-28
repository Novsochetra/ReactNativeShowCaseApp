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
  IBounceInDownContainerProps,
  BounceInDownPresentation,
  Constant,
  BouncPreset,
} from '.';

export const BounceInDown: React.FC<IBounceInDownContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  initialPositionY = Constant.INITIAL_POSITION_Y,
  type = 'less',
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(initialPositionY);
  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
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

    translateY.value = withDelay(
      delayInMS,
      withSpring(Constant.FINAL_POSITION_Y, BouncPreset[type]),
    );
  }, []);

  return (
    <BounceInDownPresentation containerStyle={animatedStyle}>
      {children}
    </BounceInDownPresentation>
  );
};
