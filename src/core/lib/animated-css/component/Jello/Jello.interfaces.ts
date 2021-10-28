import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IJelloContainerProps {
  delayInMS?: number;
}

export interface IJelloPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
