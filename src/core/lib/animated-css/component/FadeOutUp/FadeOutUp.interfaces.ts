import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFadeOutUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  startPositionY?: number;
}

export interface IFadeOutUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
