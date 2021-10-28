/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IZoomOutContainerProps, ZoomOutPresentation } from '.';

export const ZoomOut: React.FC<IZoomOutContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
}) => {
  const opacity = useSharedValue(Constant.MAX_OPACITY);
  const scale = useSharedValue(Constant.MAX_SCALE);

  const animatedStyle = useAnimatedStyle<Reanimated.AnimateStyle<ViewStyle>>(
    () => {
      return {
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
      };
    },
  );

  useEffect(() => {
    opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MIN_OPACITY, {
        duration: durationInMS,
      }),
    );

    scale.value = withDelay(
      delayInMS,
      withTiming(Constant.MIN_SCALE, {
        duration: durationInMS,
      }),
    );
  }, []);

  return (
    <ZoomOutPresentation containerStyle={animatedStyle}>
      {children}
    </ZoomOutPresentation>
  );
};
