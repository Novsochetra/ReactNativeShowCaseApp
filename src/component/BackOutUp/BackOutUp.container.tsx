/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IBackOutUpContainerProps, BackOutUpPresentation, Constant } from '.';

export const BackOutUp: React.FC<IBackOutUpContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialPositionY = Constant.INITIAL_POSITION_Y,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const translateY = useSharedValue(initialPositionY);
  const scale = useSharedValue(Constant.MAX_SCALE);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }, { scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    onAnimateOpacity();
    onAnimateScale();
    onAnimateTranslateY();
  }, []);

  const onAnimateScale = () => {
    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MIN_SCALE, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateTranslateY = () => {
    const translateYDelayDuration = delayInMS + durationInMS;
    translateY.value = withDelay(
      translateYDelayDuration,
      withTiming(
        Constant.FINAL_POSITION_Y,
        {
          duration: durationInMS,
        },
        onFinishAnimateTranslateY,
      ),
    );
  };

  const onFinishAnimateTranslateY = (isFinished: boolean) => {
    'worklet';
    if (isFinished) {
      translateY.value = initialPositionY;
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
    <BackOutUpPresentation containerStyle={animatedStyle}>
      {children}
    </BackOutUpPresentation>
  );
};
