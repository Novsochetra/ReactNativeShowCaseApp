/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { Constant, IShakeYContainerProps, ShakeYPresentation } from '.';

export const ShakeY: React.FC<IShakeYContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const translateY = useSharedValue(Constant.INITIAL_TRANSLATE_Y);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withDelay(
      delayInMS,
      withSpring(Constant.INITIAL_TRANSLATE_Y, {
        damping: Constant.DAMPING,
        restSpeedThreshold: Constant.REST_SPEED_THRESHOLD,
        stiffness: Constant.STIFFNESS,
        velocity: Constant.VELOCITY,
      }),
    );
  }, []);

  return (
    <ShakeYPresentation containerStyle={animatedStyle}>
      {children}
    </ShakeYPresentation>
  );
};
