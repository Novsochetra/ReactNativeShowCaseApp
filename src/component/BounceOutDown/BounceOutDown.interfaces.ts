import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBounceOutDownContainerProps {
  delayInMS?: number;
}

export interface IBounceOutDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
