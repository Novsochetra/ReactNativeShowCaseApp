import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlipContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  rotateInRadian?: number;
}

export interface IFlipPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
