import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackOutDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionY?: number;
}

export interface IBackOutDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
