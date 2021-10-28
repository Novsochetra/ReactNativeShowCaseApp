/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  Constant,
  ISlideInDownContainerProps,
  SlideInDownPresentation,
} from '.';

export const SlideInDown: React.FC<ISlideInDownContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  startPostionY = Constant.INITIAL_POSITION_Y,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'LINEAR',
}) => {
  const translateY = useSharedValue(startPostionY);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    },
  );

  useEffect(() => {
    translateY.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_Y, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <SlideInDownPresentation containerStyle={animatedStyle}>
      {children}
    </SlideInDownPresentation>
  );
};
