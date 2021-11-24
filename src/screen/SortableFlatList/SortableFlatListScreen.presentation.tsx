import React, { useEffect, useState, useRef, useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { ISortableFlatListScreenPresentationProps } from '.';
import { Constant } from './SortableFlatListScreen.constant';
import Animated, {
  withSpring,
  withTiming,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  runOnJS,
  withDelay,
} from 'react-native-reanimated';
import {
  LongPressGestureHandler,
  PanGestureHandler,
  LongPressGestureHandlerGestureEvent,
  PanGestureHandlerEventPayload,
  LongPressGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { Cache } from './cache';

export const ItemInfoContext = React.createContext(new Map());

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

type PanGestureContext = {
  translateX: number;
  translateY: number;
};

const caches = new Cache();

export const SortableFlatListScreenPresentation: React.FC<ISortableFlatListScreenPresentationProps> =
  () => {
    const [data, setData] = useState(Constant.DATA);

    const renderItem = ({ item, index }) => {
      return (
        <SortableItem
          value={item}
          index={index}
          key={`sortable-item-${index}`}
          onSwapItem={onSwapItem}
          onUpdateItemInfo={onUpdateItemInfo}
          itemHeights={caches.getItems()}
        />
      );
    };

    const onSwapItem = (index, toIndex) => {
      setData((prevState) => {
        return swap(prevState, index, toIndex);
      });
    };

    // TODO: Move to module array
    const swap = (arr: any[], fromIdx: number, toIdx: number): any[] => {
      const newArr = Object.assign([], arr);
      const tmp = newArr[toIdx];
      newArr[toIdx] = newArr[fromIdx];
      newArr[fromIdx] = tmp;
      return newArr;
    };

    const onUpdateItemInfo = (key, value) => {
      // setCacheItemInfo((prevState) => ({ ...prevState, [key]: value }));
      caches.add(key, value);
    };

    return (
      <ItemInfoContext.Provider value={new Map()}>
        <View>
          <Button title="swap array" onPress={() => onSwapItem()} />
          <AnimatedFlatList
            keyExtractor={(item, index) => `sortable-item-${index}`}
            data={data}
            renderItem={renderItem}
          />
        </View>
      </ItemInfoContext.Provider>
    );
  };

const SortableItem = ({
  index,
  value,
  onSwapItem,
  onUpdateItemInfo,
  itemHeights,
}) => {
  const itemContext = useContext(ItemInfoContext);
  const scaleX = useSharedValue(1);
  const scaleY = useSharedValue(1);
  const zIndex = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const buttonRef = useRef(null);
  const isDraggable = useSharedValue<boolean>(false);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
      backgroundColor: 'red',
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
      transform: [
        { scaleX: scaleX.value },
        { scaleY: scaleY.value },
        { translateY: translateY.value },
      ],
    };
  });

  const longPressEventHandler =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onStart: (event: LongPressGestureHandlerEventPayload, _ctx: {}) => {},

      onActive: (_event: LongPressGestureHandlerEventPayload, _ctx: {}) => {
        console.log('CACHES FROM ITEMS: ', itemContext.size);
        isDraggable.value = true;
        zIndex.value = 999;

        scaleX.value = withTiming(0.95, {
          duration: 250,
        });
        scaleY.value = withTiming(0.8, {
          duration: 250,
        });
      },

      onEnd: (_event: LongPressGestureHandlerEventPayload, _ctx: {}) => {
        isDraggable.value = false;
        scaleX.value = withTiming(1, {
          duration: 250,
        });
        scaleY.value = withTiming(1, {
          duration: 250,
        });
      },

      onFinish: () => {
        console.log('RESET ZINDEX');
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
        zIndex.value = 999;
        translateX.value = ctx.translateX + event.translationX;
        translateY.value = ctx.translateY + event.translationY;
      }
    },
    onEnd: (_event: PanGestureHandlerEventPayload, _ctx: PanGestureContext) => {
      if (isDraggable.value) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(100, {}, (isFinished: boolean) => {
          if (isFinished) {
            runOnJS(onSwapItem)(index, index + 1);
          }
        });
        scaleX.value = withSpring(1);
        scaleY.value = withSpring(1);
      }
      isDraggable.value = false;
    },
  });

  useEffect(() => {
    translateY.value = withTiming(0, {}, (isFinished: boolean) => {
      if (isFinished) {
        zIndex.value = 1;
      }
    });
  }, [value]);

  return (
    <LongPressGestureHandler
      ref={buttonRef}
      simultaneousHandlers={[buttonRef]}
      minDurationMs={250}
      onGestureEvent={longPressEventHandler}>
      <Animated.View
        onLayout={(event) => {
          itemContext.set(value, event.nativeEvent.layout.height);
          onUpdateItemInfo(value, event.nativeEvent.layout.height);
        }}
        style={animatedContainerStyle}>
        <PanGestureHandler
          simultaneousHandlers={[buttonRef]}
          onGestureEvent={panEventHandler}>
          <Animated.View
            style={[
              {
                width: '100%',
                height: 100,
                borderWidth: 1,
                backgroundColor: colors[value - 1],
                alignItems: 'center',
                justifyContent: 'center',
              },
              animatedStyle,
            ]}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</Text>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const styles = StyleSheet.create({});
