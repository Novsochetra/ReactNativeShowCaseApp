/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import { IFadeInDownPresentationProps, Constant } from './';

import Reanimated, {
  withTiming,
  withDelay,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const FadeInDownPresentation: React.FC<IFadeInDownPresentationProps> = (
  props,
) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(props.startPostionY);

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
      props.delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: Constant.DEFAULT_DURATION_IN_MS,
      }),
    );

    translateY.value = withDelay(
      props.delayInMS,
      withTiming(Constant.FINAL_POSITION_Y, {
        duration: Constant.DEFAULT_DURATION_IN_MS,
      }),
    );
  }, []);

  return (
    <Reanimated.View style={animatedStyle}>{props.children}</Reanimated.View>
  );
};
