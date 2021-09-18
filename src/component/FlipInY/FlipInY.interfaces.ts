import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlipInYContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialRotationInRadian?: number;
}

export interface IFlipInYPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
