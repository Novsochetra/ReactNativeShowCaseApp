/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  IBounceContainerProps,
  BouncePresentation,
  Constant,
  BouncPreset,
} from '.';

export const Bounce: React.FC<IBounceContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  type = 'less',
}) => {
  const translateY = useSharedValue(Constant.INITIAL_POSITION_Y);
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
      withSpring(Constant.FINAL_POSITION_Y, {
        ...BouncPreset[type],
        velocity: Constant.INITIAL_VELOCITY,
      }),
    );
  }, []);

  return (
    <BouncePresentation containerStyle={animatedStyle}>
      {children}
    </BouncePresentation>
  );
};
