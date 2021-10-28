import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBounceOutUpContainerProps {
  delayInMS?: number;
}

export interface IBounceOutUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
