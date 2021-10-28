import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IShakeYContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IShakeYPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
