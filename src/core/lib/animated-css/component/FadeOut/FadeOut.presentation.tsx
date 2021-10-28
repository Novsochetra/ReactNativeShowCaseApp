/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFadeOutPresentationProps, Constant } from './';

export const FadeOutPresentation: React.FC<IFadeOutPresentationProps> = (
  props,
) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const animatedStyle = useAnimatedStyle<
    Reanimated.AnimatedStyleProp<ViewStyle>
  >(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withDelay(
      props.delayInMS,
      withTiming(Constant.MIN_OPACITY, {
        duration: Constant.DEFAULT_DURATION_IN_MS,
      }),
    );
  }, []);

  return (
    <Reanimated.View style={animatedStyle}>{props.children}</Reanimated.View>
  );
};
