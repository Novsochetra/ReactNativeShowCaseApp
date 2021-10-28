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
  ISlideOutRightContainerProps,
  SlideOutRightPresentation,
} from '.';

export const SlideOutRight: React.FC<ISlideOutRightContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'LINEAR',
}) => {
  const translateX = useSharedValue(startPostionX);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        transform: [{ translateX: translateX.value }],
      };
    },
  );

  useEffect(() => {
    translateX.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_X, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <SlideOutRightPresentation containerStyle={animatedStyle}>
      {children}
    </SlideOutRightPresentation>
  );
};
