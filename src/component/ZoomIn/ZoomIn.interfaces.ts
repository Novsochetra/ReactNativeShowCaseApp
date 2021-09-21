import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomInContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomInPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
