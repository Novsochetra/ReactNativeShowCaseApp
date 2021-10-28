import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IShakeXContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IShakeXPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
