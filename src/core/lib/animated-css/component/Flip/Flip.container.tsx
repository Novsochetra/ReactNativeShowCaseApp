/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFlipContainerProps, FlipPresentation, Constant } from '.';

export const Flip: React.FC<IFlipContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  rotateInRadian = Constant.DEFAULT_ROTATION_Y_IN_RADIAN,
}) => {
  const rotateY = useSharedValue(rotateInRadian);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        transform: [
          { rotateY: `${rotateY.value}rad` },
          { perspective: Constant.DEFAULT_PERSPECTIVE },
        ],
      };
    },
  );

  useEffect(() => {
    rotateY.value = withDelay(
      delayInMS,
      withTiming(
        Constant.FINAL_ROTATION_Y_IN_RADIAN,
        {
          duration: durationInMS,
        },
        // TODO: Refactor this function
        callbackFinishRotation,
      ),
    );
  }, []);

  const callbackFinishRotation = (isFinished: boolean): void => {
    'worklet';
    if (isFinished) {
      rotateY.value = rotateInRadian;
    }
  };

  return (
    <FlipPresentation containerStyle={animatedStyle}>
      {children}
    </FlipPresentation>
  );
};
