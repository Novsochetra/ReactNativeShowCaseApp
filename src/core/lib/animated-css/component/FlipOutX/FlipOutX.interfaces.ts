import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlipOutXContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialRotationInRadian?: number;
}

export interface IFlipOutXPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
