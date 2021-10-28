import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomInUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomInUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
