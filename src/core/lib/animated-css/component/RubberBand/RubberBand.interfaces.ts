import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IRubberBandContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IRubberBandPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
