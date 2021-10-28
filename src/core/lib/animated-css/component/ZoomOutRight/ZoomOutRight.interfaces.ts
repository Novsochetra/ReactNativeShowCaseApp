import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomOutRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomOutRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
