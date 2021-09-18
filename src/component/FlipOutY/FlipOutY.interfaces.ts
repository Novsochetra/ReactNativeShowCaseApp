import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlipOutYContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialRotationInRadian?: number;
}

export interface IFlipOutYPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
