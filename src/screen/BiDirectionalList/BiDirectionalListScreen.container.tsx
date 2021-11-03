import React, { useMemo, useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import {
  Extrapolate,
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  IBiDirectionalListScreenContainerProps,
  BiDirectionalListScreenPresentation,
} from '.';
import { range } from '@core/utils/array/range';
import { ITabSize, TAB_DATA } from './component/Tabs';
import { sumPrevious } from '@core/utils/array/sumPrevious';
import { sum } from '@core/utils/array/sum';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const BiDirectionalListScreen: React.FC<IBiDirectionalListScreenContainerProps> =
  () => {
    const tabRef = useAnimatedRef<ScrollView>();
    const sectionRef = useRef<any>();
    const scrollY = useSharedValue<number>(0);
    const activeTabIndex = useSharedValue<number>(0);
    const [tabSizes, setTabSizes] = useState<Record<number, ITabSize>>({});
    const tabSizeWidth = useMemo(
      () => Object.values(tabSizes || {}).map((d) => d.width) || [],
      [tabSizes],
    );

    // worklet function must be define on top, before we can use it
    const getActiveTabWidth = () => {
      'worklet';
      return tabSizes[activeTabIndex.value]?.width ?? 0;
    };

    const inputRange = useMemo(() => {
      const productItemLength =
        TAB_DATA.map((d) => (d.data?.length + 1) * 100) || [];

      return sumPrevious(productItemLength);
    }, []);

    const outputRange = useMemo(() => {
      return range({ start: 0, size: inputRange.length });
    }, [inputRange]);

    const onScrollHandler = useAnimatedScrollHandler({
      onScroll: ({ contentOffset: { y } }) => {
        scrollY.value = y;

        const currentIndex = Math.floor(
          interpolate(y, inputRange, outputRange, Extrapolate.CLAMP),
        );

        activeTabIndex.value = currentIndex > 0 ? currentIndex : 0;
      },
    });

    const translateCenterX = useDerivedValue(() => {
      const sumPreviousTabWidth = sum(
        tabSizeWidth.slice(0, activeTabIndex.value),
      );

      const centerX =
        sumPreviousTabWidth - (SCREEN_WIDTH - getActiveTabWidth()) / 2;

      scrollTo(tabRef, centerX, 0, true);

      return sumPreviousTabWidth + 32;
    });

    const indicatorStyle = useAnimatedStyle(() => {
      const width = getActiveTabWidth();

      return {
        width: withTiming(width - 64, { duration: 250 }),
        transform: [
          {
            translateX: withTiming(translateCenterX.value, {
              duration: 250,
            }),
          },
        ],
      };
    });

    const onPressTabItem = (index: number): void => {
      sectionRef.current?.scrollToLocation({
        itemIndex: 1,
        sectionIndex: index,
        animated: true,
      });
    };

    const onSetTabSizes = (index: number, value: ITabSize): void => {
      setTabSizes((prevState) => {
        return {
          ...prevState,
          [index]: value,
        };
      });
    };

    return (
      <BiDirectionalListScreenPresentation
        {...{
          refs: {
            tabRef,
            sectionRef,
          },
          onSetTabSizes,
          scrollY,
          indicatorStyle,
          onPressTabItem,
          onScroll: onScrollHandler,
        }}
      />
    );
  };
