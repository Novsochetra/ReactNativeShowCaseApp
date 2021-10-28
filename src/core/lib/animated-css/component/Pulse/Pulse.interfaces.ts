import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IPulseContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IPulsePresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
