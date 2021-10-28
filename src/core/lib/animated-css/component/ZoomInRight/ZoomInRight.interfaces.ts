import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomInRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomInRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
