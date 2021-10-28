import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBackOutUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialPositionY?: number;
}

export interface IBackOutUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
