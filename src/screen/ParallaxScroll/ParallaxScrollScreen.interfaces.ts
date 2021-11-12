import {
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IParallaxScrollScreenContainerProps {}

export interface IParallaxScrollScreenPresentationProps {
  animatedHeaderStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  animatedScrollViewStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  animatedControllStyle: Reanimated.AnimatedStyleProp<ViewStyle>;

  onScrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
