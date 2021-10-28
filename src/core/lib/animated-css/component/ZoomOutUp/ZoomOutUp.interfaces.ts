import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomOutUpContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomOutUpPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
