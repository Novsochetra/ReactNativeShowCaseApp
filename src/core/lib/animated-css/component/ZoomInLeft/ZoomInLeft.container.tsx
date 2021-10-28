/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IZoomInLeftContainerProps, ZoomInLeftPresentation } from '.';

export const ZoomInLeft: React.FC<IZoomInLeftContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const scale = useSharedValue(Constant.MIN_SCALE);
  const translateX = useSharedValue(Constant.INITIAL_POSITION_X);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }, { translateX: translateX.value }],
      };
    },
  );

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
      }),
    );

    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_SCALE, {
        duration: durationInMS,
      }),
    );

    translateX.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_X, {
        duration: durationInMS,
      }),
    );
  }, []);

  return (
    <ZoomInLeftPresentation containerStyle={animatedStyle}>
      {children}
    </ZoomInLeftPresentation>
  );
};
