import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackInUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionY?: number;
}

export interface IBackInUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
