import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomInLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomInLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
