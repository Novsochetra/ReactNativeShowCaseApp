import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IFlipInXContainerProps {
  delayInMS?: number;
  durationInMS?: number;

  initialRotationInRadian?: number;
}

export interface IFlipInXPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
