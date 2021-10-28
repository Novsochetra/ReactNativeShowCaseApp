import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackOutLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionX?: number;
}

export interface IBackOutLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
