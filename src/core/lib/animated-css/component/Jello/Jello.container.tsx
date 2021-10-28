/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { Constant, IJelloContainerProps, JelloPresentation } from '.';

export const Jello: React.FC<IJelloContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const skewX = useSharedValue(Constant.INITIAL_SKEW_X);
  const skewY = useSharedValue(Constant.INITIAL_SKEW_Y);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      return {
        transform: [
          { skewX: `${skewX.value}rad` },
          { skewY: `${skewY.value}rad` },
        ],
      };
    },
  );

  useEffect(() => {
    const springConfig = {
      damping: Constant.DAMPING,
      restSpeedThreshold: Constant.REST_SPEED_THRESHOLD,
      stiffness: Constant.STIFFNESS,
      velocity: Constant.VELOCITY,
    };

    skewX.value = withDelay(
      delayInMS,
      withSpring(Constant.INITIAL_SKEW_X, springConfig),
    );

    skewY.value = withDelay(
      delayInMS,
      withSpring(Constant.INITIAL_SKEW_Y, springConfig),
    );
  }, []);

  return (
    <JelloPresentation containerStyle={animatedStyle}>
      {children}
    </JelloPresentation>
  );
};
