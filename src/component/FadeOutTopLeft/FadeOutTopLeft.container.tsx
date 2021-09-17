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
  IFadeOutTopLeftContainerProps,
  FadeOutTopLeftPresentation,
  Constant,
} from '.';

export const FadeOutTopLeft: React.FC<IFadeOutTopLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPositionX = Constant.INITIAL_POSITION_X,
  startPositionY = Constant.INITIAL_POSITION_Y,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const translateY = useSharedValue(startPositionY);
  const translateX = useSharedValue(startPositionX);

  const animatedStyle = useAnimatedStyle<
    Reanimated.AnimatedStyleProp<ViewStyle>
  >(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
      ],
    };
  });

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(
        Constant.MIN_OPACITY,
        {
          duration: durationInMS,
        },
        // TODO: Refactor this function
        callbackFinishOpacity,
      ),
    );

    translateY.value = withDelay(
      delayInMS,
      withTiming(
        Constant.FINAL_POSITION_Y,
        {
          duration: durationInMS,
        },
        callbackFinishTranslateY,
      ),
    );

    translateX.value = withDelay(
      delayInMS,
      withTiming(
        Constant.FINAL_POSITION_X,
        {
          duration: durationInMS,
        },
        callbackFinishTranslateX,
      ),
    );
  }, []);

  // TODO: Rename this function
  const callbackFinishOpacity = (isFinished: boolean): void => {
    'worklet';
    if (isFinished) {
      opacity.value = Constant.MAX_OPACITY;
    }
  };

  // TODO: Rename this function
  const callbackFinishTranslateX = (isFinished: boolean): void => {
    'worklet';
    if (isFinished) {
      translateX.value = Constant.INITIAL_POSITION_X;
    }
  };

  // TODO: Rename this function
  const callbackFinishTranslateY = (isFinished: boolean): void => {
    'worklet';
    if (isFinished) {
      translateY.value = Constant.INITIAL_POSITION_Y;
    }
  };

  return (
    <FadeOutTopLeftPresentation containerStyle={animatedStyle}>
      {children}
    </FadeOutTopLeftPresentation>
  );
};
