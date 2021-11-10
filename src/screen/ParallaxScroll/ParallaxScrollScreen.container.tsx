import React, { useEffect } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Reanimated, {
  Extrapolate,
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  diff,
  diffClamp,
  useDerivedValue,
} from 'react-native-reanimated';
import {
  IParallaxScrollScreenContainerProps,
  ParallaxScrollScreenPresentation,
} from '.';

export const ParallaxScrollScreen: React.FC<IParallaxScrollScreenContainerProps> =
  (props) => {
    const scrollRef = useAnimatedRef<ScrollView>();
    const height = useSharedValue<number>(300);
    const opacity = useSharedValue<number>(1);
    const offsetY = useSharedValue<number>(0);
    const onScrollHandler = useAnimatedScrollHandler({
      onScroll: ({ contentOffset: { y } }: NativeScrollEvent) => {
        offsetY.value = y;

        if (y > 150) {
          return;
        }

        height.value = interpolate(y, [0, 300], [300, 0], Extrapolate.CLAMP);
        opacity.value = interpolate(y, [0, 300], [1, 0], Extrapolate.CLAMP);
      },

      onEndDrag: ({ contentOffset: { y } }: NativeScrollEvent) => {
        offsetY.value = y;
        console.log('Y: ', y);
      },
    });

    const animatedScrollViewStyle = useAnimatedStyle(
      (): Reanimated.AnimatedStyleProp<ViewStyle> => {
        return {};
      },
    );

    const animatedHeaderStyle = useAnimatedStyle(
      (): Reanimated.AnimatedStyleProp<ViewStyle> => {
        return {
          opacity: opacity.value,
          width: '100%',
          height: height.value,
        };
      },
    );

    const animatedControllStyle = useAnimatedStyle(
      (): Reanimated.AnimatedStyleProp<ViewStyle> => {
        return {
          bottom: 0,
          opacity: interpolate(
            offsetY.value,
            [0, 120, 150],
            [1, 1, 0],
            Extrapolate.CLAMP,
          ),
        };
      },
    );

    const onScrollEndDrag = () => {
      console.log('OFFSET: ', offsetY.value);
    };

    return (
      <ParallaxScrollScreenPresentation
        ref={scrollRef}
        {...props}
        offsetY={offsetY.value}
        animatedHeaderStyle={animatedHeaderStyle}
        animatedScrollViewStyle={animatedScrollViewStyle}
        onScrollHandler={onScrollHandler}
        onScrollEndDrag={onScrollEndDrag}
        animatedControllStyle={animatedControllStyle}
      />
    );
  };
