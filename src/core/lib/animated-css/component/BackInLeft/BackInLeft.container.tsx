/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IBackInLeftContainerProps, BackInLeftPresentation, Constant } from '.';

export const BackInLeft: React.FC<IBackInLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialPositionX = Constant.INITIAL_POSITION_X,
}) => {
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const translateX = useSharedValue(initialPositionX);
  const scale = useSharedValue(Constant.MIN_SCALE);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }, { scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    onAnimateOpacity();
    onAnimateTranslateX();
    onAnimateScale();
  }, []);

  const onAnimateScale = () => {
    const scaleDelayDuration = delayInMS + durationInMS;

    scale.value = withDelay(
      scaleDelayDuration,
      withTiming(Constant.MAX_SCALE, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateTranslateX = () => {
    translateX.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_X, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateOpacity = () =>
    (opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
      }),
    ));

  return (
    <BackInLeftPresentation containerStyle={animatedStyle}>
      {children}
    </BackInLeftPresentation>
  );
};
