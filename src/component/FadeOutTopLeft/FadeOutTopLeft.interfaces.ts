import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFadeOutTopLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionY?: number;
  startPositionX?: number;
}

export interface IFadeOutTopLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
