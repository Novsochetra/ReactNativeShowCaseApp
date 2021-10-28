import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomOutLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomOutLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
