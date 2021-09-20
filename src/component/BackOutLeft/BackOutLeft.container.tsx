/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  IBackOutLeftContainerProps,
  BackOutLeftPresentation,
  Constant,
} from '.';

export const BackOutLeft: React.FC<IBackOutLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialPositionX = Constant.INITIAL_POSITION_X,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const translateX = useSharedValue(initialPositionX);
  const scale = useSharedValue(Constant.MAX_SCALE);

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
    onAnimateScale();
    onAnimateTranslateX();
  }, []);

  const onAnimateScale = () => {
    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MIN_SCALE, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateTranslateX = () => {
    const translateYDelayDuration = delayInMS + durationInMS;
    translateX.value = withDelay(
      translateYDelayDuration,
      withTiming(
        Constant.FINAL_POSITION_X,
        {
          duration: durationInMS,
        },
        onFinishAnimateTranslateX,
      ),
    );
  };

  const onFinishAnimateTranslateX = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      translateX.value = initialPositionX;
      opacity.value = Constant.MAX_OPACITY;
      scale.value = Constant.MAX_SCALE;
    }
  };

  const onAnimateOpacity = () => {
    const opacityDuration = delayInMS + durationInMS;
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MIN_OPACITY, {
        duration: opacityDuration,
      }),
    );
  };

  return (
    <BackOutLeftPresentation containerStyle={animatedStyle}>
      {children}
    </BackOutLeftPresentation>
  );
};
