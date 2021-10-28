/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { IFlashContainerProps, FlashPresentation, Constant } from '.';

export const Flash: React.FC<IFlashContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  preset = 'EASE_IN_QUAD',
}) => {
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const animatedStyle = useAnimatedStyle<
    Reanimated.AnimatedStyleProp<ViewStyle>
  >(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withRepeat(
        withTiming(Constant.MAX_OPACITY, {
          duration: durationInMS,
          easing: EasingPreset[preset],
        }),
        2,
      ),
    );
  }, []);

  return (
    <FlashPresentation containerStyle={animatedStyle}>
      {children}
    </FlashPresentation>
  );
};
