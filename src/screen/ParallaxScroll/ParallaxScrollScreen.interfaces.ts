import { ViewStyle } from 'react-native';
import Reanimated, {
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export interface IParallaxScrollScreenContainerProps {}

export interface IParallaxScrollScreenPresentationProps {
  animatedHeaderStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onScrollHandler: any;
}
