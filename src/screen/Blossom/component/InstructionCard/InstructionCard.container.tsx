import React, { useEffect } from 'react';
import { IInstructionCardContainerProps, InstructionCardPresentation } from '.';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useComponentLayout } from '@core/lib/animated-css/core/hook';
import { EasingPreset } from '@core/lib/animated-css';

export const InstructionCard: React.FC<IInstructionCardContainerProps> = (
  props,
) => {
  const rotateZ = useSharedValue(0);
  const [size, onLayout] = useComponentLayout();
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // TODO: extract to transform origin
        { translateX: -0 },
        { translateY: size.height / 2 },
        { rotateZ: `${rotateZ.value}rad` },
        { translateX: 0 },
        { translateY: -size.height / 2 },
      ],
    };
  });

  useEffect(() => {
    if (size.height) {
      rotateZ.value = withDelay(
        props.delayAnimationInMS || 0,
        withTiming(props.rotateInRad || 0, {
          duration: 2000,
          easing: EasingPreset.EASE_OUT_EXPO,
        }),
      );
    }
  });
  return (
    <InstructionCardPresentation
      {...props}
      onLayout={onLayout}
      containerStyle={animatedContainerStyle}
    />
  );
};
