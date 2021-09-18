import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackInLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionX?: number;
}

export interface IBackInLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
