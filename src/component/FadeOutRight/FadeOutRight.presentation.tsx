/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { IFadeOutRightPresentationProps, Constant } from './';

export const FadeOutRightPresentation: React.FC<IFadeOutRightPresentationProps> =
  (props) => {
    const opacity = useSharedValue(Constant.MAX_OPACITY);
    const translateX = useSharedValue(props.startPostionX);

    const animatedStyle = useAnimatedStyle<
      Reanimated.AnimatedStyleProp<ViewStyle>
    >(() => {
      return {
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }],
      };
    });

    useEffect(() => {
      opacity.value = withDelay(
        props.delayInMS,
        withTiming(
          Constant.MIN_OPACITY,
          {
            duration: Constant.DEFAULT_DURATION_IN_MS,
          },
          // TODO: Refactor this function
          callbackFinishOpacity,
        ),
      );

      translateX.value = withDelay(
        props.delayInMS,
        withTiming(
          Constant.FINAL_POSITION_X,
          {
            duration: Constant.DEFAULT_DURATION_IN_MS,
          },
          callbackFinishTranslateX,
        ),
      );
    }, []);

    const callbackFinishOpacity = (isFinished: boolean): void => {
      'worklet';
      if (isFinished) {
        opacity.value = Constant.MAX_OPACITY;
      }
    };

    const callbackFinishTranslateX = (isFinished: boolean): void => {
      'worklet';
      if (isFinished) {
        translateX.value = Constant.INITIAL_POSITION_X;
      }
    };

    return (
      <Reanimated.View style={animatedStyle}>{props.children}</Reanimated.View>
    );
  };
