import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ICarouselContainerProps {
  style: Reanimated.AnimatedStyleProp<ViewStyle>;
}

export interface ICarouselPresentationProps {
  activeSlide: number;
  style: Reanimated.AnimatedStyleProp<ViewStyle>;

  onScrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChangeSlide: (index: number) => void;
}
