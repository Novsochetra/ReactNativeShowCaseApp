import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IWobbleContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IWobblePresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
