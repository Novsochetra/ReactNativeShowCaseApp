/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFadeOutDownPresentationProps, Constant } from './';

export const FadeOutDownPresentation: React.FC<IFadeOutDownPresentationProps> =
  (props) => {
    const opacity = useSharedValue(Constant.MAX_OPACITY);
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
        withTiming(Constant.MIN_OPACITY, {
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
