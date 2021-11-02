import React, { useMemo, useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedReaction,
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
import { TAB_DATA } from './component/Tabs';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const BiDirectionalListScreen: React.FC<IBiDirectionalListScreenContainerProps> =
  (props) => {
    const tabRef = useAnimatedRef();
    const sectionRef = useRef(null);
    const [tabSizes, setTabSizes] = useState({});
    const scrollY = useSharedValue<number>(0);
    const activeTabIndex = useSharedValue<number>(0);

    const inputRange = useMemo(() => {
      let result = [0];
      let sumOfPreviousValue = 0;

      for (let i = 1; i <= TAB_DATA.length; i++) {
        sumOfPreviousValue += (TAB_DATA[i - 1].data?.length + 1) * 100;
        result[i] = sumOfPreviousValue;
      }

      return result;
    }, []);

    const outputRange = useMemo(() => {
      // TODO: refactor
      return Array.from({ length: inputRange.length + 1 }, (x, i) => i);
    }, [inputRange]);

    const onScrollHandler = useAnimatedScrollHandler({
      onScroll: (nativeEvent, value) => {
        scrollY.value = nativeEvent?.contentOffset?.y;

        const index = Math.floor(
          interpolate(
            nativeEvent?.contentOffset?.y,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        );

        const eachSectionLength = TAB_DATA[index]?.data?.length + 1;

        activeTabIndex.value = index > 0 ? index : 0;
      },
    });

    const translateCenterX = useDerivedValue(() => {
      let sumWidthPreviousTab = 0;

      for (let i = 0; i < activeTabIndex.value; i++) {
        sumWidthPreviousTab += tabSizes[i]?.width ?? 0;
      }

      const currentTabWidth = tabSizes[activeTabIndex.value]?.width ?? 0;
      const centerX =
        sumWidthPreviousTab - (SCREEN_WIDTH - currentTabWidth) / 2;
      scrollTo(tabRef, centerX, 0, true);

      return sumWidthPreviousTab + 32;
    });

    const indicatorStyle = useAnimatedStyle(() => {
      const width = tabSizes[activeTabIndex.value]?.width ?? 0;
      const translateX =
        activeTabIndex.value > 0 ? (SCREEN_WIDTH - (width ?? 0)) / 2 : 0;

      return {
        position: 'absolute',
        bottom: 0,
        height: 8,
        borderRadius: 8,
        width: withTiming(width - 64, { duration: 250 }),
        backgroundColor: 'rgb(197,47,100)',
        transform: [
          {
            translateX: withTiming(translateCenterX.value, {
              duration: 250,
            }),
          },
        ],
      };
    });

    const onPressTabItem = (index: number) => {
      sectionRef.current?.scrollToLocation({
        itemIndex: 1,
        sectionIndex: index,
        animated: true,
      });
    };

    const onSetTabSizes = (index, value) => {
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
          ref: {
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
