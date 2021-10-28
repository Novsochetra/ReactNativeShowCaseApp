import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackInRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionX?: number;
}

export interface IBackInRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
