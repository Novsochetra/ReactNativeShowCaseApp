import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFadeOutTopRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionY?: number;
  startPositionX?: number;
}

export interface IFadeOutTopRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
