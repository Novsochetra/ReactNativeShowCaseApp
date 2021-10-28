import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IZoomOutContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IZoomOutPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
