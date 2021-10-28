import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackOutRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionX?: number;
}

export interface IBackOutRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
