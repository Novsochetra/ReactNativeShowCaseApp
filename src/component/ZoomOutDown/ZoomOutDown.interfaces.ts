import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomOutDownContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomOutDownPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
