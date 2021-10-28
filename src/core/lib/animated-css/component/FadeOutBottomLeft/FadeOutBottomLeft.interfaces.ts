import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFadeOutBottomLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionY?: number;
  startPositionX?: number;
}

export interface IFadeOutBottomLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
