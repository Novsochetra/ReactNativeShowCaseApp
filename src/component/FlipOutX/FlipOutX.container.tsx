/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFlipOutXContainerProps, FlipOutXPresentation, Constant } from '.';

export const FlipOutX: React.FC<IFlipOutXContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialRotationInRadian = Constant.INITIAL_ROTATION_X,
}) => {
  const rotateX = useSharedValue(initialRotationInRadian);
  const opacity = useSharedValue(Constant.MAX_OPACITY);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ rotateX: `${rotateX.value}rad` }, { perspective: 10 }],
      };
    },
  );

  useEffect(() => {
    rotateX.value = withDelay(
      delayInMS,
      withTiming(
        Constant.FINAL_ROTATION_X,
        {
          duration: durationInMS,
        },
        onFinishRotateX,
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

  const onFinishRotateX = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      rotateX.value = initialRotationInRadian;
    }
  };

  const onFinishOpacity = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      opacity.value = Constant.MAX_OPACITY;
    }
  };

  return (
    <FlipOutXPresentation containerStyle={animatedStyle}>
      {children}
    </FlipOutXPresentation>
  );
};
