import React, { useEffect, useState } from 'react';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IPlanIntroContainerProps, PlanIntroPresentation } from '.';

export const PlanIntro: React.FC<IPlanIntroContainerProps> = (props) => {
  const opacity = useSharedValue(1);
  const opacityTypingDesiption = useSharedValue(0);
  const overlayBoxTranslateX = useSharedValue(0);

  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const animatedDescriptionStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedTypingDescriptionStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityTypingDesiption.value,
      //opacity: 1,
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      top: 16,
      left: 16,
    };
  });

  const animatedOverlayBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: overlayBoxTranslateX.value }],
    };
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      opacity.value = withTiming(0, { duration: 1000 }, (isFinished) => {
        if (isFinished) {
          opacityTypingDesiption.value = withDelay(
            500,
            withTiming(1, { duration: 1000 }),
          );
          overlayBoxTranslateX.value = withDelay(
            500,
            withTiming(300, { duration: 3000 }),
          );
          runOnJS(setDescriptionVisible)(false);
        }
      });
    });
  });
  return (
    <PlanIntroPresentation
      {...props}
      descriptionVisible={descriptionVisible}
      animatedDescriptionStyle={animatedDescriptionStyle}
      animatedTypingDescriptionStyle={animatedTypingDescriptionStyle}
      animatedOverlayBoxStyle={animatedOverlayBoxStyle}
    />
  );
};
