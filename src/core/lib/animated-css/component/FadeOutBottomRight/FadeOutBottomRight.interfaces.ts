import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFadeOutBottomRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionY?: number;
  startPositionX?: number;
}

export interface IFadeOutBottomRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
