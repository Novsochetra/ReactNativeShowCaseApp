/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { EasingPreset } from '../../core/animation/EasingPreset';
import { IFadeInUpContainerProps, FadeInUpPresentation, Constant } from '.';

export const FadeInUp: React.FC<IFadeInUpContainerProps> = ({
  delayInMS = 0,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionY = Constant.INITIAL_POSITION_Y,
  preset = 'LINEAR',
  children,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(startPostionY);

  const animatedStyle = useAnimatedStyle<
    Reanimated.AnimatedStyleProp<ViewStyle>
  >(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );

    translateY.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_Y, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <FadeInUpPresentation containerStyle={animatedStyle}>
      {children}
    </FadeInUpPresentation>
  );
};
