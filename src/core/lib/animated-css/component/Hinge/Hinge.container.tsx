/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  IHingeContainerProps,
  HingePresentation,
  Constant,
  BouncPreset,
} from '.';
import { useComponentLayout } from '../../core/hook';

export const Hinge: React.FC<IHingeContainerProps> = ({
  children,
  delayInMS = Constant.DEFAULT_DELAY_IN_MS,
  preset = 'less',
  finalPositionY = Constant.FINAL_POSITION_Y,
}) => {
  const [size, onLayout] = useComponentLayout();
  const translateY = useSharedValue(0);
  const rotationZ = useSharedValue(0);
  const ALPHA_IN_RADIAN = Math.PI / 4; // 45 degree
  const adjacent = finalPositionY;

  // TRIGONOMETRY FOMULA
  // Tan(ɑ) = Opposite /  Adjacent
  // Cos(ɑ) = Adjacent / Hypothenuse
  const hypothenuse = adjacent / Math.cos(ALPHA_IN_RADIAN);
  const opposite = Math.tan(ALPHA_IN_RADIAN) * adjacent;

  const animatedStyle = useAnimatedStyle(
    (): Reanimated.AnimateStyle<ViewStyle> => {
      return {
        transform: [
          // TODO: refactor this to transform origin
          { translateX: -size.width / 2 },
          { translateY: -size.height / 2 },
          { rotateZ: `${rotationZ.value}rad` },
          { translateX: size.width / 2 },
          { translateY: size.height / 2 },

          {
            translateX: interpolate(
              translateY.value,
              [0, hypothenuse],
              [0, hypothenuse + opposite], // adding + opposite just to make the falling is more realistic
            ),
          },
          { translateY: translateY.value },
        ],
      };
    },
  );

  useEffect(() => {
    if (size.width) {
      rotationZ.value = withDelay(
        delayInMS,
        withSpring(ALPHA_IN_RADIAN, BouncPreset[preset]),
      );

      translateY.value = withDelay(
        delayInMS + 1000,
        withSpring(hypothenuse, BouncPreset[preset]),
      );
    }
  }, [size.width]);

  return (
    <HingePresentation onLayout={onLayout} containerStyle={animatedStyle}>
      {children}
    </HingePresentation>
  );
};
