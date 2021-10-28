/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IBackInUpContainerProps, BackInUpPresentation, Constant } from '.';

export const BackInUp: React.FC<IBackInUpContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  initialPositionY = Constant.INITIAL_POSITION_Y,
}) => {
  const opacity = useSharedValue(Constant.MIN_OPACITY);
  const translateY = useSharedValue(initialPositionY);
  const scale = useSharedValue(Constant.MIN_SCALE);

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
    onAnimateTranslateY();
    onAnimateScale();
  }, []);

  const onAnimateScale = () => {
    const scaleDelayDuration = delayInMS + durationInMS;

    scale.value = withDelay(
      scaleDelayDuration,
      withTiming(Constant.MAX_SCALE, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateTranslateY = () => {
    translateY.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_Y, {
        duration: durationInMS,
      }),
    );
  };

  const onAnimateOpacity = () =>
    (opacity.value = withDelay(
      delayInMS,
      withTiming(Constant.MAX_OPACITY, {
        duration: durationInMS,
      }),
    ));

  return (
    <BackInUpPresentation containerStyle={animatedStyle}>
      {children}
    </BackInUpPresentation>
  );
};
