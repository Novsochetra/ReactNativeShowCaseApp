import { theme } from '@core/asset/style/theme';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  runOnJS,
  runOnUI,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerEventPayload,
  TapGestureHandlerGestureEvent,
  TapGestureHandlerProps,
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  LongPressGestureHandlerEventPayload,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { MARGIN, TAB_WIDTH, Constant } from './constant';
import { ITabProps, PanGestureContext } from './Tab.interface';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Tab: React.FC<ITabProps> = (props) => {
  const scale = useSharedValue(1);
  const borderWidth = useSharedValue(0);
  const zIndex = useSharedValue(Constant.DEFAULT_ZINDEX);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const tabRef = useRef(null);
  const isDraggable = useSharedValue<boolean>(false);
  const [active, setActive] = useState(false);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
      borderWidth: borderWidth.value,
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const isOverlayOnOtherTab = (x: number): boolean => {
    'worklet';
    if (x >= 200) {
      return true;
    }

    return false;
  };

  function onSwap() {
    props.onSwap(0, 1);
    setActive(true);
  }

  const longPressEventHandler =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onStart: (event: LongPressGestureHandlerEventPayload, _ctx: {}) => {
        console.log('EVENT START: ', event);
      },

      onActive: (_event: LongPressGestureHandlerEventPayload, _ctx: {}) => {
        isDraggable.value = true;
        zIndex.value = Constant.MAX_ZINDEX;

        scale.value = withTiming(Constant.TAB_MIN_SCALE, {
          duration: 250,
        });
        borderWidth.value = withTiming(Constant.TAB_MAX_BORDER_WIDTH, {
          duration: 250,
        });
      },

      onEnd: (_event: LongPressGestureHandlerEventPayload, _ctx: {}) => {
        isDraggable.value = false;
        scale.value = withTiming(Constant.TAB_MAX_SCALE, {
          duration: 250,
        });

        borderWidth.value = withTiming(Constant.TAB_MIN_BORDER_WIDTH, {
          duration: 250,
        });
      },

      onFinish: () => {
        zIndex.value = withDelay(500, withSpring(Constant.DEFAULT_ZINDEX));
      },
    });

  const panEventHandler = useAnimatedGestureHandler({
    onStart: (event: PanGestureHandlerEventPayload, ctx: PanGestureContext) => {
      ctx.translateX = event.translationX;
      ctx.translateY = event.translationY;
    },
    onActive: (
      event: PanGestureHandlerEventPayload,
      ctx: PanGestureContext,
    ) => {
      if (isDraggable.value) {
        console.log('X: ', event.translationX);
        if (isOverlayOnOtherTab(event.translationX)) {
          runOnJS(onSwap)();
          // runOnJS(onSwap)();
        }
        translateX.value = withSpring(ctx.translateX + event.translationX, {});
        translateY.value = withSpring(ctx.translateY + event.translationY, {});
      }
    },
    onEnd: (_event: PanGestureHandlerEventPayload, _ctx: PanGestureContext) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  return (
    <LongPressGestureHandler
      ref={tabRef}
      simultaneousHandlers={[tabRef]}
      minDurationMs={500}
      onGestureEvent={longPressEventHandler}>
      <Animated.View style={animatedContainerStyle}>
        <PanGestureHandler
          simultaneousHandlers={[tabRef]}
          onGestureEvent={panEventHandler}>
          <Animated.View style={[styles.container, animatedStyle]}>
            <Text>
              {props.label} {active ? 'true' : 'false'}
            </Text>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: TAB_WIDTH,
    backgroundColor: theme.white,
    height: TAB_WIDTH,
    margin: MARGIN,
    borderWidth: 0,
    borderColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
