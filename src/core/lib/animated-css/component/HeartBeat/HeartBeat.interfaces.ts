import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IHeartBeatContainerProps {
  delayInMS?: number;
  durationInMS?: number;
}

export interface IHeartBeatPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
