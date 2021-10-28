import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ITadaContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface ITadaPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
