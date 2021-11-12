import React, { useState, useRef } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import Reanimated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {
  ICarouselContainerProps,
  CarouselPresentation,
  ReanimatedScrollView,
} from '.';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Carousel: React.FC<ICarouselContainerProps> = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useAnimatedRef<ReanimatedScrollView>();
  const scrollActiveCountRef = useRef<ScrollView>(null);
  const offsetX = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const activeIndex = useSharedValue(0);
  const dotTranslateX = useSharedValue(0);
  const dotWidth = useSharedValue(20);

  // slide index props
  const opacityActiveSlideText = useSharedValue(1);

  const dotStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      borderRadius: 20,
      height: 20,
      margin: 4,
      backgroundColor: 'white',
      width: dotWidth.value,
      transform: [
        {
          translateX: dotTranslateX.value,
        },
      ],
    };
  });

  const onAnimatedOpacity = () => {
    'worklet';
    opacityActiveSlideText.value = 0;

    opacityActiveSlideText.value = withTiming(1, { duration: 1000 });
  };

  const onScrollActiveSlideText = (index: number) => {
    scrollActiveCountRef.current?.scrollTo({
      y: 20 * index,
      x: 0,
      animated: true,
    });
  };

  const onScrollHandler = useAnimatedScrollHandler({
    onBeginDrag: () => {},

    onScroll: ({ contentOffset: { x }, velocity }: NativeScrollEvent) => {
      offsetX.value = x;
      velocityX.value = velocity?.x || 0;
    },

    onEndDrag: ({ contentOffset: { x } }: NativeScrollEvent) => {
      offsetX.value = x;
      console.log('END DRAG');
    },

    onMomentumEnd: ({ contentOffset: { x } }: NativeScrollEvent) => {
      const index = Math.round(x / SCREEN_WIDTH);

      if (activeIndex.value !== index) {
        activeIndex.value = index;
        const isScrollBack = velocityX.value < 0;
        const delayDuration = isScrollBack ? 0 : 250;

        onAnimatedOpacity();
        dotWidth.value = withSequence(
          withTiming(50, { duration: 250 }),
          withTiming(20, { duration: 250 }),
        );
        dotTranslateX.value = withDelay(
          delayDuration,
          withTiming(activeIndex.value * 20 + 8 * activeIndex.value),
        );
        runOnJS(onScrollActiveSlideText)(index);
      }
    },
  });

  useDerivedValue(() => {
    if (activeIndex.value !== activeSlide) {
      runOnJS(setActiveSlide)(activeIndex.value);
    }
  }, [activeIndex.value]);

  const onChangeSlide = (index: number): void => {
    scrollRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      y: 0,
      animated: true,
    });

    scrollActiveCountRef.current?.scrollTo({
      y: 20 * index,
      x: 0,
      animated: true,
    });

    const duration = 250;
    const isScrollBack = index < activeSlide;
    const diffIndex = Math.abs(index - activeIndex.value);
    const delayDuration = isScrollBack ? 0 : duration;

    activeIndex.value = index;
    dotWidth.value = withSequence(
      withTiming(26 * (diffIndex + 1), { duration: duration }),
      withTiming(20, { duration: duration }),
    );
    dotTranslateX.value = withDelay(
      delayDuration,
      withTiming(index * 20 + 8 * index),
    );

    opacityActiveSlideText.value = withSequence(
      withTiming(0, { duration: duration }),
      withTiming(1, { duration: duration }),
    );
  };
  return (
    <CarouselPresentation
      {...props}
      refs={{ scrollRef, scrollActiveCountRef }}
      images={props.images}
      dotStyle={dotStyle}
      onChangeSlide={onChangeSlide}
      onScrollHandler={onScrollHandler}
      controllButtonStyle={props.animatedControllStyle}
    />
  );
};
