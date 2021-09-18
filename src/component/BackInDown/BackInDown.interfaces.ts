import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackInDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionY?: number;
}

export interface IBackInDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
