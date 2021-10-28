/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Constant, ISwingContainerProps, SwingPresentation } from '.';
import { useComponentLayout } from '../../core/hook';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

export const Swing: React.FC<ISwingContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
}) => {
  const [size, onLayout] = useComponentLayout();
  const rotationZ = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: -size.height / 2 },
        {
          rotateZ: `${rotationZ.value}rad`,
        },
        { translateY: size.height / 2 },
      ],
    };
  });

  useEffect(() => {
    rotationZ.value = withDelay(
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
    <SwingPresentation onLayout={onLayout} containerStyle={animatedStyle}>
      {children}
    </SwingPresentation>
  );
};
