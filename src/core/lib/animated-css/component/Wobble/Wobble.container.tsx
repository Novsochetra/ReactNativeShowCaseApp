/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { Constant, IWobbleContainerProps, WobblePresentation } from '.';

export const Wobble: React.FC<IWobbleContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const translateX = useSharedValue(Constant.INITIAL_TRANSLATE_X);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimatedStyleProp<ViewStyle> => {
      const rotateZ = interpolate(
        translateX.value,
        [
          Constant.MIN_TRANSLATE_X,
          Constant.INITIAL_TRANSLATE_X,
          Constant.MAX_TRANSLATE_X,
        ],
        [-Math.PI / 6, 0, Math.PI / 6],
        Extrapolate.CLAMP,
      );

      return {
        transform: [
          { rotateZ: `${rotateZ}rad` },
          { translateX: translateX.value },
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

    translateX.value = withDelay(
      delayInMS,
      withSpring(Constant.INITIAL_TRANSLATE_X, springConfig),
    );
  }, []);

  return (
    <WobblePresentation containerStyle={animatedStyle}>
      {children}
    </WobblePresentation>
  );
};
