import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBounceOutLeftContainerProps {
  delayInMS?: number;
}

export interface IBounceOutLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
