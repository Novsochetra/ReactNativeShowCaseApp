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
  IBounceInContainerProps,
  BounceInPresentation,
  Constant,
  BouncPreset,
} from '.';

export const BounceIn: React.FC<IBounceInContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  type = 'less',
}) => {
  const scale = useSharedValue(Constant.MIN_SCALE);
  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        transform: [{ scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    scale.value = withDelay(
      delayInMS,
      withSpring(Constant.MAX_SCALE, BouncPreset[type]),
    );
  }, []);

  return (
    <BounceInPresentation containerStyle={animatedStyle}>
      {children}
    </BounceInPresentation>
  );
};
