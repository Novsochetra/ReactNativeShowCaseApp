import { LayoutChangeEvent, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ISwingContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface ISwingPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onLayout: (event: LayoutChangeEvent) => void;
}
