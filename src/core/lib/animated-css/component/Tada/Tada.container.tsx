/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Constant, ITadaContainerProps, TadaPresentation } from '.';

export const Tada: React.FC<ITadaContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const rotationZ = useSharedValue(Constant.MIN_ROTATION_Z);
  const scale = useSharedValue(Constant.MIN_SCALE);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      return {
        transform: [
          { scale: scale.value },
          { rotateZ: `${rotationZ.value}rad` },
        ],
      };
    },
  );

  useEffect(() => {
    scale.value = withDelay(
      delayInMS,
      withSequence(onScaleUp(), onScaleDown()),
    );

    rotationZ.value = onRotateZ();
  }, []);

  const onScaleUp = (): number => {
    'worklet';

    return withTiming(Constant.MAX_SCALE, {
      duration: durationInMS,
      easing: EasingPreset.EASE_OUT_SINE,
    });
  };

  const onScaleDown = (): number => {
    'worklet';
    const DELAY_SCALE_IN_MS = 250;

    return withDelay(
      DELAY_SCALE_IN_MS,
      withTiming(Constant.MIN_SCALE, {
        duration: durationInMS,
        easing: EasingPreset.EASE_IN_SINE,
      }),
    );
  };

  const onRotateZ = (): number => {
    'worklet';
    const springConfig = {
      damping: Constant.DAMPING,
      restSpeedThreshold: Constant.REST_SPEED_THRESHOLD,
      stiffness: Constant.STIFFNESS,
      velocity: Constant.VELOCITY,
    };

    return withDelay(
      delayInMS,
      withSpring(Constant.MIN_ROTATION_Z, springConfig),
    );
  };

  return (
    <TadaPresentation containerStyle={animatedStyle}>
      {children}
    </TadaPresentation>
  );
};
