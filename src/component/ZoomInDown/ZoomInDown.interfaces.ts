import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomInDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomInDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
