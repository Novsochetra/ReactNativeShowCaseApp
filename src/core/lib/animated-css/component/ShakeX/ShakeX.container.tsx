/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { Constant, IShakeXContainerProps, ShakeXPresentation } from '.';

export const ShakeX: React.FC<IShakeXContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    translateX.value = withDelay(
      delayInMS,
      withSpring(0, {
        damping: Constant.DAMPING,
        restSpeedThreshold: Constant.REST_SPEED_THRESHOLD,
        stiffness: Constant.STIFFNESS,
        velocity: Constant.VELOCITY,
      }),
    );
  }, []);

  return (
    <ShakeXPresentation containerStyle={animatedStyle}>
      {children}
    </ShakeXPresentation>
  );
};
