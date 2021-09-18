/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFlipInYContainerProps, FlipInYPresentation, Constant } from '.';

export const FlipInY: React.FC<IFlipInYContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialRotationInRadian = Constant.INITIAL_ROTATION_Y,
}) => {
  const rotateY = useSharedValue(initialRotationInRadian);
  const opacity = useSharedValue(Constant.MIN_OPACITY);

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
      withTiming(Constant.FINAL_ROTATION_Y, {
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
    <FlipInYPresentation containerStyle={animatedStyle}>
      {children}
    </FlipInYPresentation>
  );
};
