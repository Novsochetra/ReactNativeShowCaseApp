/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFlipInXContainerProps, FlipInXPresentation, Constant } from '.';

export const FlipInX: React.FC<IFlipInXContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialRotationInRadian = Constant.INITIAL_ROTATION_X,
}) => {
  const rotateX = useSharedValue(initialRotationInRadian);
  const opacity = useSharedValue(Constant.MIN_OPACITY);

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
      withTiming(Constant.FINAL_ROTATION_X, {
        duration: durationInMS,
      }),
    );

    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
      }),
    );
  }, []);

  return (
    <FlipInXPresentation containerStyle={animatedStyle}>
      {children}
    </FlipInXPresentation>
  );
};
