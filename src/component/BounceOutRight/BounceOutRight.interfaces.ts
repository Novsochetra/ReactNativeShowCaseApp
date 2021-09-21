import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBounceOutRightContainerProps {
  delayInMS?: number;
}

export interface IBounceOutRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
