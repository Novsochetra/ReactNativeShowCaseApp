/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import { IFadeInPresentationProps, Constant } from './';
import Reanimated, {
  withTiming,
  withDelay,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const FadeInPresentation: React.FC<IFadeInPresentationProps> = (
  props,
) => {
  const opacity = useSharedValue(0);
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
      withTiming(Constant.MAX_OPACITY, {
        duration: Constant.DEFAULT_DURATION_IN_MS,
      }),
    );
  }, []);

  return (
    <Reanimated.View style={animatedStyle}>{props.children}</Reanimated.View>
  );
};
