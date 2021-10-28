/* eslint-disable react-hooks/exhaustive-deps */
import { EasingPreset } from '../../core/animation/EasingPreset';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Constant, IRollInContainerProps, RollInPresentation } from '.';

export const RollIn: React.FC<IRollInContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  durationInMS = Constant.DEFAULT_DURATION_IN_MS,
  startPostionX = Constant.INITIAL_POSITION_X,
  preset = 'LINEAR',
}) => {
  const translateX = useSharedValue(startPostionX);
  const rotationZ = useSharedValue(Constant.INITIAL_ROTATION_Z_IN_RADIAN);

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      return {
        transform: [
          { translateX: translateX.value },
          { rotateZ: `${rotationZ.value}rad` },
        ],
      };
    },
  );

  useEffect(() => {
    translateX.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_POSITION_X, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );

    rotationZ.value = withDelay(
      delayInMS,
      withTiming(Constant.FINAL_ROTATION_Z_IN_RADIAN, {
        duration: durationInMS,
        easing: EasingPreset[preset],
      }),
    );
  }, []);

  return (
    <RollInPresentation containerStyle={animatedStyle}>
      {children}
    </RollInPresentation>
  );
};
