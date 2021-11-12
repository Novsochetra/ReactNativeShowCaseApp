import { Ref } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
  ScrollView,
} from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ICarouselContainerProps {
  images: string[];
  style: Reanimated.AnimatedStyleProp<ViewStyle>;
  animatedControllStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}

export interface ICarouselPresentationProps {
  images: string[];
  refs: {
    scrollRef: Ref<Reanimated.ScrollView>;
    scrollActiveCountRef: Ref<ScrollView>;
  };
  dotStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  style: Reanimated.AnimatedStyleProp<ViewStyle>;
  controllButtonStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onScrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChangeSlide: (index: number) => void;
}

export type ReanimatedScrollView = Reanimated.ScrollView & {
  scrollTo: (
    y?:
      | number
      | {
          x?: number | undefined;
          y?: number | undefined;
          animated?: boolean | undefined;
        },
    x?: number,
    animated?: boolean,
  ) => void;
};
