import React from 'react';
import { NativeScrollEvent, ViewStyle } from 'react-native';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  IParallaxScrollScreenContainerProps,
  ParallaxScrollScreenPresentation,
} from '.';

export const ParallaxScrollScreen: React.FC<IParallaxScrollScreenContainerProps> =
  (props) => {
    const scrollRef = useAnimatedRef<Reanimated.ScrollView>();
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

    return (
      <ParallaxScrollScreenPresentation
        ref={scrollRef}
        {...props}
        animatedHeaderStyle={animatedHeaderStyle}
        animatedScrollViewStyle={animatedScrollViewStyle}
        onScrollHandler={onScrollHandler}
        animatedControllStyle={animatedControllStyle}
      />
    );
  };
