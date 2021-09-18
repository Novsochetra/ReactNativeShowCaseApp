/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFlipOutYContainerProps, FlipOutYPresentation, Constant } from '.';

export const FlipOutY: React.FC<IFlipOutYContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialRotationInRadian = Constant.INITIAL_ROTATION_Y,
}) => {
  const rotateY = useSharedValue(initialRotationInRadian);
  const opacity = useSharedValue(Constant.MAX_OPACITY);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ rotateY: `${rotateY.value}rad` }],
      };
    },
  );

  useEffect(() => {
    rotateY.value = withDelay(
      delayInMS,
      withTiming(
        Constant.FINAL_ROTATION_Y,
        {
          duration: durationInMS,
        },
        onFinishRotateY,
      ),
    );

    opacity.value = withDelay(
      delayInMS,
      withTiming(
        Constant.MIN_OPACITY,
        {
          duration: durationInMS,
        },
        onFinishOpacity,
      ),
    );
  }, []);

  const onFinishRotateY = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      rotateY.value = initialRotationInRadian;
    }
  };

  const onFinishOpacity = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      opacity.value = Constant.MAX_OPACITY;
    }
  };

  return (
    <FlipOutYPresentation containerStyle={animatedStyle}>
      {children}
    </FlipOutYPresentation>
  );
};
